import React from 'react';
import './App.css';
import Navbar from './component/layouts/Navbar';
import RequestTesting from './component/pages/registrations/agent_testing/RequestTesting';
//import RequestTesting1 from './component/pages/RequestTesting1';
import Pricing from './component/pages/Pricing';
import HowItWorks from './component/pages/HowItWorks';
import Services from './component/pages/Services';
import ThankYou from './component/pages/ThankYou';
import Register from './component/pages/Register';
import Footer from './component/layouts/Footer';
import Contact from './component/pages/Contact';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './component/pages/Home';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Login from './component/auth/Login';
import Dashboard from './component/pages/Dashboard';
import HomeTesting from './component/pages/registrations/home_testing/HomeTesting';


function onAuthRequired({ history }) {
	history.push('/login');
}

function App() {
	return (
		<Router>
			<Security issuer='https://dev-650599.okta.com/oauth2/default'
				client_id='0oa141acv1ESsDs8A357'
				redirect_uri={window.location.origin + '/implicit/callback'}
				onAuthRequired={onAuthRequired}>
				<div className="App">
					<Navbar></Navbar>
					<Route exact={true} path="/" component={Home}></Route>
					<SecureRoute path="/register" component={Register}></SecureRoute>
					<SecureRoute path="/dashboard" component={Dashboard}></SecureRoute>
					<Route path="/RequestTesting" component={RequestTesting}></Route>
					<Route path="/Services" component={Services}></Route>
					<Route path="/ThankYou" component={ThankYou}></Route>
					<Route path="/Pricing" component={Pricing}></Route>
					<Route path="/HowItWorks" component={HowItWorks}></Route>
					<Route path="/Hometesting" component ={HomeTesting}></Route>					
					<Route path="/Contact" component={Contact}></Route>
					<Route path='/login' render={() => <Login baseUrl='https://dev-650599.okta.com' />} />
					<Route path='/implicit/callback' component={ImplicitCallback} />
					
				</div>
			</Security>
		</Router>
	);
}

export default App;
