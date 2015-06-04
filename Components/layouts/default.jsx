var React = require('react');

var DefaultLayout = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
});

module.exports = DefaultLayout;