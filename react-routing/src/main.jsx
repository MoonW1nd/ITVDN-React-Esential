import ReactDOM from 'react-dom';
import React from "react";
import PropTypes from "prop-types";
import {Router, Route, hashHistory} from 'react-router';

import App from './App.jsx';
import AboutPage from './components/AboutPage.jsx';
import InboxPage from './components/InboxPage.jsx';
import Message from './components/Message.jsx';
import NotFound from './components/NotFound.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<Route path='/about' component={AboutPage}/>
			<Route path="/inbox" component={InboxPage}>
				<Route path='/inbox/message/:messageId' component={Message}/>
			</Route>
		</Route>
		<Route path="*" component={NotFound}/>
	</Router>,
	document.getElementById("mount-point")
);