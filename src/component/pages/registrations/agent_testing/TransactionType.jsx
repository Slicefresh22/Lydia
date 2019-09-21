import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class TransactionType extends Component {

	continue = ()=>{
		this.props.nextStep();
	}
	render() {
		return (
			<div>
				<div className="jumbotron">
					<h1 className="display-4">Transcation Type</h1>

				</div>
				<div className="text-center">
					<Link className="btn btn-primary btn-lg" to={'/hometesting'}>Home Testing</Link>
					{" "}{" "}
					<button onClick={this.continue}  className="btn btn-info btn-lg">Realtor Testing</button>
				</div>
			</div>
		);
	}
}



export default TransactionType;