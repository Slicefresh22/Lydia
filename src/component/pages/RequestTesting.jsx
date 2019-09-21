import React, { Component } from 'react';
//import Background from '../images/airlevel_whoosh.jpg';
import {Link} from 'react-router-dom';
import TransactionType from './registrations/agent_testing/TransactionType'

class RequestTesting extends Component {
	state = {
		step: 1,
		totalSteps: 4,

		// client infos
		clientsName: '',
		clientsPhone: '',
		clientsEmail: '',

		// client address
		testingStreet: '',
		testingCity: '',
		testingState: '',
		testingZip: '',
		testingCountry: '', 

		// listing agent information 
		listingAgentName: '',
		listingAgentEmail:'', 
		listingAgentPhone:'', 
		notes: '', 

		// buyers information
		buyersFirstName: '', 
		buyersFirstEmail:'', 
		buyersFirstPhone:'', 

		typeOfTest:'',

		// for results
		resultsEmail_1:'', 
		resultsEmail_2:''
	}
	
	render() {
		const {step} = this.state;
		return (
			<TransactionType></TransactionType>
		)
	}
}

export default RequestTesting;