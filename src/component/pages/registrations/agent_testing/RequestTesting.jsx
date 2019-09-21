import React, { Component } from 'react';
import TransactionType from './TransactionType';
import ClientInfos from '../agent_testing/ClientInfos';
import RequestAddress from '../agent_testing/RequestAddress';
import ListingAgentInfo from './ListingAgentInfo';
import BuyerInfo from './BuyerInfo';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from '../../../payments/CheckoutForm';

class RequestTesting extends Component {
	state = {
		step: 0,
		totalSteps: 4,

		// client infos
		clientsFirst: '',
		clientsLast:'',
		clientsPhone: '',
		clientsEmail: '',

		// client address
		testingStreet: '',
		testingCity: '',
		testingState: '',
		testingZip: '',
		testingCountry: '', 

		// listing agent information 
		listingAgentFirst: '',
		listingAgentLast: '',
		listingAgentEmail:'', 
		listingAgentPhone:'', 
		notes: '', 

		// buyers information
		buyersName: '', 
		buyersEmail:'', 
		buyersPhone:'', 

		// for results
		typeOfTest: '',
		resultsEmail_1:'', 
		resultsEmail_2:'', 

		// amount to be pay
		totalAmount: 1500000.00
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

	render() {
		const {step} = this.state;
		const { clientsFirst, clientsLast,clientsPhone,clientsEmail, testingStreet,
			testingCity, testingState, testingZip, testingCountry, listingAgentFirst, listingAgentLast,
		listingAgentEmail, listingAgentPhone, notes, buyersName, 
		buyersEmail, buyersPhone, typeOfTest, resultsEmail_1, 
		resultsEmail_2, totalAmount} = this.state;

		const values = {
			clientsFirst, clientsLast,clientsPhone,clientsEmail, testingStreet,
			testingCity, testingState, testingZip, testingCountry, listingAgentFirst, listingAgentLast,
			listingAgentEmail, listingAgentPhone, notes, buyersName, 
			buyersEmail, buyersPhone, typeOfTest, resultsEmail_1, 
			resultsEmail_2, totalAmount
		}

		switch(step){
			case 0:
				return (
					<TransactionType 
						values = {values}
						handleChange={this.handleChange}
						nextStep={this.nextStep}
					></TransactionType>
				)

			case 1:
				return (
					<ClientInfos 
						handleChange={this.handleChange}
						values={values}
						nextStep={this.nextStep}
					></ClientInfos>
				)
			
			case 2:
				return (
					<RequestAddress
						handleChange={this.handleChange}
						values={values}
						nextStep={this.nextStep}
						prevStep={this.prevStep}
					></RequestAddress>
				)
			
			case 3:
				return (
					<ListingAgentInfo
						handleChange={this.handleChange}
						values={values}
						nextStep={this.nextStep}
						prevStep={this.prevStep}
					></ListingAgentInfo>
				)

			case 4:
				return (
					<BuyerInfo
						handleChange={this.handleChange}
						values={values}
						nextStep={this.nextStep}
						prevStep={this.prevStep}
					></BuyerInfo>
				)

			case 5:
				return (
					<StripeProvider apiKey="pk_test_pgdXIRQS6J4uvSW0xGpfOLvb00LzbE07uP">
						<div>
							<Elements>
								<CheckoutForm values={values} nextStep={this.nextStep}></CheckoutForm>
							</Elements>
						</div>
					</StripeProvider>
				)
		}
	}
}

export default RequestTesting;