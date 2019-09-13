import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from 'root/components/containers/appContainer/App';
// import * as serviceWorker from './serviceWorker.js';
import { ApolloProvider } from 'react-apollo';
import client from './apollo/apolloClient';

ReactDOM.render(
	<ApolloProvider client={client}>
		<App/>
	</ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
