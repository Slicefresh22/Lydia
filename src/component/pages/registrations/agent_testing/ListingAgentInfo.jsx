import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class ListingAgentInfo extends Component {

    state = {
        collapse: false, 
        textLabel: '', 
        isValidated: false
    }

    continue = (e) =>{
        e.preventDefault();
        //(this.fieldsValidation()) ? this.props.nextStep() : alert("Oops, all the field must be filled out before procceding.");
        this.props.nextStep() 
    }

    prevStep =()=>{
        this.props.prevStep();
    }

    fieldsValidation = () =>{
        
        const {values} = this.props;
        const { 
            listingAgentFirst, 
            listingAgentLast, 
            listingAgentPhone, 
            listingAgentEmail
        } = values;

        listingAgentFirst.length < 1 ? this.setState({ isValidated: false }) : this.setState({ isValidated: true });
        listingAgentLast.length < 1 ? this.setState({ isValidated: false }) : this.setState({ isValidated: true });
        listingAgentPhone.length < 1 ? this.setState({ isValidated: false }) : this.setState({ isValidated: true });
        listingAgentEmail.length < 1 ? this.setState({ isValidated: false }) : this.setState({ isValidated: true });

        return this.state.isValidated;
    }

    toggle = (e)=>{
        e.preventDefault();
        const {collapse} = this.state;
        this.setState(state => ({ collapse: !state.collapse }));
        if (!collapse) {
            this.setState({ textLabel: "Hide notes" })
        }
        else {
            this.setState({ textLabel: "Add notes" })
        }
    }

    componentDidMount(){
        // setting the text label
        this.setState({ textLabel: "Add notes >>"})
    }

    render(){
        const { values, handleChange } = this.props;
        const { textLabel} = this.state;
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="mb-4">
                        <span className="badge badge-info badge-lg float-left">
                            %
							</span>
                        <h3>Listing Agent's Info</h3>
                        <p className="lead">Please enter the listing agent information</p>
                        <hr />
                    </div>
                    <form>
                        <input defaultValue={values["listingAgentFirst"]} onChange={handleChange("listingAgentFirst")} className="form-control" type="text" placeholder="Listing agent first name"></input>
                        <br />
                        <input defaultValue={values["listingAgentLast"]} onChange={handleChange("listingAgentLast")} className="form-control" type="text" placeholder="Listing agent last name"></input>
                        <br />
                        <input defaultValue={values["listingAgentPhone"]} onChange={handleChange("listingAgentPhone")} className="form-control" type="phone" placeholder="Client's Phone"></input>
                        <br />
                        <input defaultValue={values["listingAgentEmail"]} onChange={handleChange("listingAgentEmail")} className="form-control" type="email" placeholder="Client's Email"></input>
                        <br />
                        <a className="float-left" href="#" onClick={this.toggle} ><strong>{textLabel}</strong></a>
                        <br/>
                        <Collapse isOpen={this.state.collapse}>
                            <br/>
                            <textarea defaultValue={values["notes"]} onChange={handleChange("notes")} type="textarea" placeholder="add some notes or instructions" className="form-control"></textarea>
                        </Collapse>
                        <br/>
                        <hr/>
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

export default ListingAgentInfo