import React, { Component } from 'react';
import ClientsInfos from './ClientsInfos';
import ClientsAddress from './ClientsAddress';
import TestTypes from './TestTypes';
import Confirm from './Confirm';
import Submitted  from './Submitted';

class HomeTesting extends Component {
	state = {
		step: 1,
		totalSteps: 4,
		// client infos
		clientsName: '',
		clientsPhone: '',
		clientsEmail: '',
		// client address
		clientsStreet: '',
		clientsCity: '',
		clientsState: '',
		clientsZip: '',
		clientsCountry: ''
	}

	// the next step method 
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	}

	// the prev step method 
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	}

	// handle textfield changes 
	handleChange = input => e => {
		this.setState({
			[input]: e.target.value
		});
	}

	handleSubmit= ()=>{
		return this.completedStatus() == 100 ? this.nextStep() : 
		alert("Sorry, we were unable to send your request.");
	}

	// completion status percentage 
	completedStatus=()=>{
		const {totalSteps, step } = this.state;
		return step == 1 ? 0 : (step / totalSteps) *100;
	}

	render() {
		const { step } = this.state;
		const { 
			clientsName, clientsPhone, clientsEmail,
			clientsStreet, clientsCity, clientsState,
			clientsZip, clientsCountry
		} = this.state;
		
		// creating a values objects
		const values = {
			clientsName, clientsPhone, clientsEmail,
			clientsStreet, clientsCity, clientsState,
			clientsZip, clientsCountry
		}

		switch (step) {
			case 1:
				return (
					<ClientsInfos nextStep={this.nextStep}
						handleChange={this.handleChange}
						completedStatus={this.completedStatus}
						values={values}></ClientsInfos>
				)
			case 2:
				return (
					<ClientsAddress nextStep={this.nextStep}
						handleChange={this.handleChange}
						completedStatus= {this.completedStatus}
						values={values} prevStep={this.prevStep}></ClientsAddress>
				)
			case 3:
				return (
					<TestTypes nextStep={this.nextStep}
						handleChange={this.handleChange}
						completedStatus={this.completedStatus}
						values={values} prevStep={this.prevStep}></TestTypes>
				)

			case 4:
				return (
					<Confirm nextStep={this.nextStep}
						completedStatus={this.completedStatus}
						handleSubmit={this.handleSubmit}
						values={values} prevStep={this.prevStep}></Confirm>
				)

			case 5:
				return (
					<Submitted></Submitted>
				)
				
					
		}
	}
}

export default HomeTesting;