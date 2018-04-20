import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const uploadLink =  new HttpLink({ uri: "http://localhost:3040/graphql" });

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
	<ApolloProvider client={client}>
	<App/>
	</ApolloProvider>,
	document.getElementById('root'));
registerServiceWorker();
