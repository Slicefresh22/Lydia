// src/Home.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Dashboard extends Component {
    state = {
        authenticated: null, 
        // infos about the current user 
        currentUser:{}
    };

    checkAuthentication = async ()=> {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    // Getting loged in user's 
    // informations 
    getCurrentUser = () =>{
        const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));

        const user = {
            fullname: idToken.idToken.claims.name, 
            email: idToken.idToken.claims.email, 
            username: idToken.idToken.claims.preferred_username
        }
        this.setState({currentUser: user});
    }


    async componentDidMount() {
        this.checkAuthentication();
        this.getCurrentUser(); // getting the current user 
    }

    async componentDidUpdate() {
        this.checkAuthentication();
    }

    login = async () =>{
        this.props.auth.login('/');
    }

    logout = async () => {
        this.props.auth.logout('/');
    }

    render() {
        const {fullname, email} = this.state.currentUser;

        if (this.state.authenticated === null) return null;

        const MainContents = this.state.authenticated ?
            <button className="btn btn-info" onClick={this.logout}>Logout</button> :
            <button onClick={this.login}>Login</button>;

        return (
            <div>
                <hr></hr>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <aside>
                                <ul className="list-group">
                                    <li className="list-group-item active"> Welcome, {fullname}</li>
                                    <Link to="/register" className="list-group-item">Schedlue New Test</Link>
                                    <li className="list-group-item">Results</li>
                                    <li className="list-group-item">Update Account</li>
                                    <li className="list-group-item">First item</li>
                                    <li className="list-group-item">Second item</li>
                                    {MainContents}
                                </ul>
                            </aside>
                        </div>
                        <div className="col-md-9">
                            <div className="jumbotron">
                                <h1 className="display-4">
                                    Welcome to Your Agent Dashboard, {fullname}.
                                </h1>
                                <p>Your Email is: {email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});