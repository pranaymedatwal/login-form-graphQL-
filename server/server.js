var express =require ('express');
const app = express();
var express_graphql= require ('express-graphql');
var { buildSchema } =require ('graphql');
var bodyParser =require ('body-parser');
var {makeExecutableSchema} =require ('graphql-tools');
var {graphqlExpress,graphiqlExpress} =require ('apollo-server-express');
var cors=require ( 'cors');
var mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/nodede");

var cors=require("cors");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	firstname:String,
	lastname:String,
    email:  String,
    password: String
    
},{collection:'user'});

var user = mongoose.model('user', UserSchema );
 app.listen(3040,function(){
   console.log("server listening");
 });
 
app.use(cors({origin:"*"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const typeDefs=`
	type Query{
		getUsers: String
	},
	type Mutation{
		signup(firstname: String, lastname: String,email:String,password:String): Boolean
		login(email:String,password:String):user
	},
	type user{
		firstname:String,
		lastname:String,
		email:String,
		password:String
	}
`;

const resolvers = {
	Query: {
		getUsers: (root, data) =>{
			return "Reached the getUsers resolver";
		}
	},
	Mutation: {
		signup: (root, data) =>{
			console.log(data);
			var userdata = new user({
	firstname:data.firstname,
	lastname:data.lastname,
	email:data.email,
	password:data.password,
	
});
			userdata.save();
			return true;
		},
		login:async (root,data)=>{
			console.log(data);
			const response=await user.findOne({email:data.email,password:data.password});
			console.log(response)
			if(response!=null)
			{
				return response;
			}

		}
	}
};

const schema = makeExecutableSchema({typeDefs, resolvers});

app.use('/graphql', bodyParser.json(), graphqlExpress({
	schema
}));
app.use('/graphiql', graphiqlExpress({
	endpointURL: '/graphql'
}));
