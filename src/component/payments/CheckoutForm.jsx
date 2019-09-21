import React, { Component } from 'react';
import { CardElement, injectStripe} from 'react-stripe-elements';
import Axios from 'axios';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = { complete: false };
    }

    submit = async (ev) => {
        const { totalAmount, clientsFirst, clientsLast } = this.props.values;
        let { token } = await this.props.stripe.createToken({ name: clientsFirst + " "+clientsLast });

        const mydata = {
            tokenId: token.id, 
            amount: totalAmount
        }

        let response = await fetch("/charge", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(mydata)
        });

        // success 
        response.ok ? this.continue() : alert("An error is occur. transaction canceled!");
    }

    continue = (e)=>{
        this.props.nextStep();
    }

    render() {
        const{totalAmount}= this.props.values;
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="mb-4">
                        <span className="badge badge-info badge-lg float-left">
                            %
							</span>
                        <h3>Payments</h3>
                        <p className="lead">
                            Please enter your card information below.
                        </p>
                        <hr />
                    </div>
                    <div className="checkout">
                        <form>

                        </form>
                        <CardElement className="form-control"></CardElement>
                        <br/>
                        <button className="btn btn-success" onClick={this.submit}>Pay ${totalAmount}</button>
                    </div>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        );
    }
}
 
export default injectStripe(CheckoutForm);