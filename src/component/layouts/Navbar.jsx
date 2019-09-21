import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.jpg';
import { Redirect } from 'react-router-dom';

import { withAuth } from '@okta/okta-react';

export default withAuth(class Navbar extends Component {
	state = { authenticated: null };

	checkAuthentication = async()=> {
		const authenticated = await this.props.auth.isAuthenticated();
		if (authenticated !== this.state.authenticated) {
			this.setState({ authenticated });
		}
	}

	async componentDidMount() {
		this.checkAuthentication();
	}

	async componentDidUpdate() {
		this.checkAuthentication();
	}

	login = async ()=> {
		this.props.auth.login('/');
	}

	logout = async() =>{
		this.props.auth.logout('/');
	}

	render() {
		if (this.state.authenticated === null) return null;

		const LoginStatus = this.state.authenticated ?
		
			<div>
				<Link className="nav-link lead" to="/dashboard">Dashboard</Link>
				<Redirect to={{ pathname: '/dashboard' }} />
				
			</div> :
			<Link className="nav-link lead" to="/login">Login</Link>;

		return (
			<nav className="navbar bg-white navbar-white ">
				<Link className="navbar-brand" to="/">
					<img src={Logo} alt="Logo" style={{ width: "400px" }}></img>
				</Link>
				
				
				<ul className="nav">
					<li className="nav-item">
						<Link className="nav-link lead" to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link lead" to="/services">Services</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link lead" to="/RequestTesting">Request Test</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link lead" to="/Pricing">Pricing</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link lead" to="/HowItWorks">How it Works</Link>
					</li>
					<li className="nav justify-content-end">
						{LoginStatus}
					</li>
				</ul>
			</nav>
				
		);
	}
});
