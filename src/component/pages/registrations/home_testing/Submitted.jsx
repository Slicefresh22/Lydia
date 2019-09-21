import React, { Component } from 'react';

class Submitted extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="jumbotron">
				<div className="display-4">Your request was submitted successfully.</div>
				<div className="lead">You will receive an email with further instructions shortly.</div>
			</div>
		);
	}
}

export default Submitted;
