import React from "react";
import {Link} from "react-router";
import "./NotFound.less";

export default class NotFound extends React.Component {
	render() {
		return(
			<div>
				<div className="NotFoundPage">
					- Page Not Found -
				</div>
				<div className="menu-bar-non">
					<div className="menu-item-non">
						<Link className="menu-item-link-non" to="/about"> About </Link>
					</div>
					<div className="menu-item-non">
						<Link className="menu-item-link-non" to="/inbox"> Inbox </Link>
					</div>
				</div>
			</div>
		)
	}
}