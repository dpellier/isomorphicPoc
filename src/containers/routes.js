import React from "react";
import {Router, Route} from "react-router";

import Home from "./home/Home";

/**
 * The React Router routes for both the server and the client.
 */
module.exports = (
	<Router>
		<Route path="/" component={Home} />
	</Router>
);


// So with the router it looks like this:
//const routes = (
//	<Route component={App}>
//		<Route path="groups" components={{main: Groups, sidebar: GroupsSidebar}}/>
//		<Route path="users" components={{main: Users, sidebar: UsersSidebar}}>
//			<Route path="users/:userId" component={Profile}/>
//		</Route>
//	</Route>
//)
//
//class App extends React.Component {
//	render () {
//		const { main, sidebar } = this.props;
//		return (
//			<div>
//				<div className="Main">
//					{main}
//				</div>
//				<div className="Sidebar">
//					{sidebar}
//				</div>
//			</div>
//		)
//	}
//}
