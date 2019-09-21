import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RequestTesting5 extends Component {
    render() {
        return (
            <div className="BuyersInfo">

                <div className="jumbotron">
                    <h1 className="display-4">Buyers Info</h1>
                </div>

                <form>
                    <input type="text" placeholder="Buyer 1 First Name" required></input>
                    <input type="text" placeholder="Buyer 1 Last Name" required></input>
                    <input type="phone" placeholder="Buyer 1 Phone" required></input>
                    <input type="email" placeholder="Buyer 1 Email" required></input>

                    <br></br><br></br>

                    <input type="text" placeholder="Buyer 2 First Name"></input>
                    <input type="text" placeholder="Buyer 2 Last Name"></input>
                    <input type="phone" placeholder="Buyer 2 Phone"></input>
                    <input type="email" placeholder="Buyer 2 Email"></input><br></br><br></br>

                    <input type="email" placeholder="Additional Emails For Results"></input><br></br><br></br>
                    <input type="email" placeholder="Additional Emails For Results"></input><br></br><br></br>
                    <input type="email" placeholder="Additional Emails For Results"></input><br></br><br></br>

                    <Link to ="/ThankYou"className="btn btn-info mt-4">Next</Link> 
                    
                    <br></br><br></br>
            
                </form>
            </div>
                    
        );
    }
}

export default RequestTesting5;