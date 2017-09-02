import React from 'react';
import PropTypes from "prop-types";

import MessagePreview from "./MessagePreview.jsx";
import messages from '../messages.json';
import Message from "./Message.jsx";

class InboxPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages
		}
	}

	handlePreviewClick(messageId) {
		// console.log (this.context.router);
		this.context.route.push(`/inbox/message/${messageId}`)
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
					<Message/>
					{this.props.children}
				</div>
			</div>
		)
	}
}

InboxPage.propTypes = {

};
InboxPage.contextTypes = {
	route: PropTypes.object.isRequired
};


export default InboxPage;