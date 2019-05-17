import * as React from 'react';
import { Modal, DialogContent, Button } from '@material-ui/core';
import Fullscreen from '@material-ui/icons/Fullscreen';
import CloseIcon from '@material-ui/icons/Close';

interface IDialogContainterProps {
	children?: any;
	handleClose: (...args: any[]) => any;
	disableBackdropClick?: boolean;
}

interface IDialogContainterState {
	isMaximized: boolean;
}

export default class DialogContainter extends React.Component<IDialogContainterProps, IDialogContainterState> {

	public state: Readonly<IDialogContainterState> = {
		isMaximized: false
	};

	private handleMaximize = () => {
		this.setState({ isMaximized: !this.state.isMaximized });
	}

	public render() {
		let dialogContentClass = 'dialogContent';
		dialogContentClass = dialogContentClass + (this.state.isMaximized ? ' dialogContentFullSize' : ' dialogContentDefaultSize');
		return (
			<Modal
				disableBackdropClick={Boolean(this.props.disableBackdropClick)}
				disableAutoFocus={true}
				className={'modal'}
				onClose={this.props.handleClose}
				style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
				open={true}
			>
				<DialogContent className={dialogContentClass}>
					<div className={'dialogButtonsContainer'}>
						<Button onClick={this.handleMaximize} className={'dialogButton'}><Fullscreen/></Button>
						<Button onClick={this.props.handleClose} className={'dialogButton'}><CloseIcon/></Button>
					</div>
					{this.props.children}
				</DialogContent>
			</Modal>
		);
	}
}