import React, { Component } from 'react';

class BuyerInfo extends Component {
    
    continue = () => {
        this.props.nextStep();
    }

    prevStep = () => {
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="mb-4">
                        <span className="badge badge-info badge-lg float-left">
                            %
							</span>
                        <h3>Byer's Information</h3>
                        <p className="lead">Please enter the buyer information below</p>
                        <hr />
                    </div>
                    <form>
                        <input defaultValue={values["buyersName"]} onChange={handleChange("buyersName")} className="form-control" type="text" placeholder="Buyer first and last"></input>
                        <br />
                        <input defaultValue={values["buyersPhone"]} onChange={handleChange("buyersPhone")} className="form-control" type="phone" placeholder="Buyer's Phone"></input>
                        <br />
                        <input defaultValue={values["buyersEmail"]} onChange={handleChange("buyersEmail")} className="form-control" type="email" placeholder="Buyer's Email"></input>
                        <br />
                        <hr />
                        <button onClick={this.continue} className="btn btn-info float-right">Continue</button>
                        {"  "}
                        <button onClick={this.prevStep} className="btn btn-info float-right mr-4">Go Back</button>
                    </form>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        );
    }
}

export default BuyerInfo