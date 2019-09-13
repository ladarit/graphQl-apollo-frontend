import * as React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import GraphiQlViewer from 'root/components/graphiQlViewer/GraphiQlViewer';
import Orders from '../../orders/orders';

interface IAppState {
	showGraphiQlViewer: boolean;
}

export default class App extends React.Component<any, IAppState> {

	public state: Readonly<IAppState> = {
		showGraphiQlViewer: false
	};

	private showGraphiQlViewer = (show: boolean) => {
		this.setState({ showGraphiQlViewer: show });
	}

	public render() {
		return (
			<div className='App'>
				<Button onClick={() => this.showGraphiQlViewer(true)}>showGraphiQlViewer</Button>
				{this.state.showGraphiQlViewer && <GraphiQlViewer handleClose={() => this.showGraphiQlViewer(false)}/>}
				<Orders/>
			</div>
		);
	}
}