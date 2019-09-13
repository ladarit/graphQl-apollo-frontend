import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_ORDERS = gql`
  {
    orders {
		id
		status
	}
  }
`;
// interface IAppState {
// 	showGraphiQlViewer: boolean;
// }

export default class Orders extends React.Component<any, any> {

	// public state: Readonly<IAppState> = {
	// 	showGraphiQlViewer: false
	// };


	public render() {
		return (
			<Query query={GET_ORDERS}>
				{({ loading, error, data }: any) => {
				if (loading) {
					 return 'Loading...';
				}
				if (error) {
					return `Error! ${error.message}`;
				}

				return (
					data.orders.map((order: any) => (
						<div key={order.id}>
						{order.id}
						 {/* <option key= value={order.status}> */}
						{order.status}
						{/* </option> */}
						</div>
					))
				);
				}}
			</Query>
		);
	}
}