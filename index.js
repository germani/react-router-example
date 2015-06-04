require('node-jsx').install({extension: '.jsx'});
var React 	= require('react');
var Router 	= require('react-router');
var path 	= require('path');
var views 	= path.join(__dirname, '/Components');

var Route 	= Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;


var express = require('express');
var app = express();
// Express App setup
var BASEDIR = process.env.PWD;
app.set("views", BASEDIR + '/Components');
app.set('view engine', 'jade');
app.use("/public", express.static(BASEDIR + "/public"));

var routes = require('./routes.jsx');


app.get('/', function (req, res) {
	console.log( req.url );
	Router.run(routes, '/', function (Handler) {
		var content = React.renderToString(React.createElement(Handler));
		console.log(content);
		res.render('index', {
			content: content
		});
	});
});

app.get('/about', function (req, res) {
	console.log(req.url );
	Router.run(routes, '/about', function (Handler) {
		var content = React.renderToString(React.createElement(Handler));
		console.log(content);
		res.render('index', {
			content: content
		});
	});
});


var server = app.listen(8082, function () {

	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)

});