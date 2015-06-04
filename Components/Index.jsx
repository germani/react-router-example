var React = require('react');
var Link = require('react-router').Link;
var DefaultLayout = require('./layouts/default');


var divStyle = {
	color: 'white',
	WebkitTransition: 'all', // note the capital 'W' here
	msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};



var Index = React.createClass({
	getInitialState: function() {
		return {
			content : 'not content',
			styled: divStyle
		};
	},
	handleClick: function() {
		this.setState({
			styled : {
				color: 'green'
			}
		});
		console.log('aaaa');
	},
	render: function () {
		return (
			<DefaultLayout title={this.props.title}>
				<Link to="home">Home</Link> <br/>
				<Link to="about">About</Link>

				<h2>Index page</h2>
			</DefaultLayout>
		);
	}
});


module.exports = Index;