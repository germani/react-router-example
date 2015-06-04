'use strict';


var path 	= require('path');
var React 	= require("react");
var Router 	= require('react-router');

var Route 	= Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var views 	= path.join(__dirname, '/Components');

// Components
var Index 	= require(views+'/Index.jsx');
var NotFound 	= require(views+'/NotFound.jsx');
var About 	= require(views+"/About.jsx");

var routes = (
	<Route name="home" path="/" handler={Index} >
		<Route name="about" path="/about" handler={About} />
		<NotFoundRoute name="404" handler={NotFound}/>
		<DefaultRoute handler={Index} />
	</Route>
);


module.exports = routes;

