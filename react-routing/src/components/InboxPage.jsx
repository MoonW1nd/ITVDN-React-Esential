import React from 'react';
import PropTypes from "prop-types";


import MessagePreview from "./MessagePreview.jsx";
import messages from '../messages.json';

class InboxPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages,
			router
		}
	}

	getChildContext() {
		return {router: this.state.router};
	}

	handlePreviewClick(messageId) {
		this.context.router.push(`/inbox/message/${messageId}`);
	}

	render () {
		return (
			<div className="InboxPage">
				<div className="messages">
					{
						messages.map(message =>
							<MessagePreview
								key={message.id}
							    title={message.subject}
							    senderName={message.senderName}
							    onClick={this.handlePreviewClick.bind(null,message.id)}
							/>
						)
					}
				</div>
				<div className="message-container">
					{this.props.children}
				</div>
			</div>
		)
	}
}
InboxPage.contextTypes = {
	router: PropTypes.object.isRequired
};

export default InboxPage;