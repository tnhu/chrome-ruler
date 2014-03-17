/** @jsx React.DOM */

var Config = require('./Config');
var React = require('react');
var DraggingEvent = require('./DraggingEvent');

var Shim = React.createClass({
	getInitialState: function() {
		return { display: 'none' };
	},

	componentWillMount: function() {
		DraggingEvent.on('dragging', this.onDragging);
	},

	onDragging: function(val, cursor) {
		this.setState({
			display: val? '' : 'none',
			cursor: cursor
		});
	},

	render: function() {
		var style = {
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			display: this.state.display || '',
			cursor: this.state.cursor,
			zIndex: Config.zIndex - 1
		};

		return (
			<div style={ style } />
		);
	}
});

module.exports = Shim;
