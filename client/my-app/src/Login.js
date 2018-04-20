import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql,compose } from 'react-apollo';

class Login extends Component {
	constructor(props)
	{
	 super(props);
	 this.state={
      email:"",
      password:"",
      authenticate:"",
      response:""
    };
  this.senddetails=this.senddetails.bind(this);
  }
	 
async senddetails(event){
  event.preventDefault();
    const LoginDetails = {
      email:this.state.email ,
      password:this.state.password
    };
    const response = await this.props.login({
      variables: LoginDetails
    });
    debugger

    console.log(response)
    this.authenticateuser(response.data.login);
  }
 authenticateuser(response)
  {debugger
     if(response!=null){
      this.setState({
        response:response
      })
      this.props.user(response)
     this.props.history.push('/firstpage');
    }
    else
    {
      this.setState({
        authenticate:"wrong username or password"
      });
    }

  }

   render() {
      return (
	      <div>
	          <div className="rows">
	          <div className="col-sm-3">
	          </div>
	          <div className="col-sm-6">
	          <div className="panel panel-success">
            <div className="panel-heading">LOGIN</div>
            <div className="panel-body">
            <form onSubmit={this.senddetails}>
            <div className="form-group">
				      <label>Email address:</label>
				      <input type="email" className="form-control" id="email" onChange={(event)=>this.setState({email:event.target.value})}/>
				    </div>
				    <div className="form-group">
				      <label>Password:</label>
				      <input type="password" className="form-control" id="pwd" onChange={(event)=>this.setState({password:event.target.value})}/>
				    </div>
				    <p>{this.state.authenticate}</p>
				    <div className="checkbox">
				      <label><input type="checkbox"/> Remember me</label>
				    </div>
				      <button type="submit" className="btn btn-default" >Log In</button>
			      
			       <button className="btn btn-default">	<Link to={'/signup'}>Sign Up</Link></button>
             </form>
             </div>
            </div>
	          </div>
			  	</div>
	      </div>
      );
   }
}
const login =gql`
mutation($email:String,$password:String){
  login(email:$email,password:$password){
    firstname
    lastname
    email
    password
  }
}
`;
export default compose(
  graphql(login, {name: 'login'})
)(Login);