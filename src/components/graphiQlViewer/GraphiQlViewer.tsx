const GraphiQL = require('graphiql');
import * as React from 'react';
import axios from 'axios';
import DialogContainter from '../hoc/dialogContainter/dialogContainter';
const websocketURL = 'ws://localhost:8081/askod/graphApi/Subscriptions';

const graphQLFetcher = (graphQLParams: any) => {
	return axios.post('http://localhost:63267/api/graphqlendpoint/getsheme', graphQLParams)
	.then((resp) => resp.data);
};

export default class GraphiQlViewer extends React.Component<any, any> {

	public render() {
		return (
			<DialogContainter
				handleClose={this.props.handleClose}
				disableBackdropClick={true}
			>
				<GraphiQL fetcher={graphQLFetcher}/>
			</DialogContainter>
		);
	}
}