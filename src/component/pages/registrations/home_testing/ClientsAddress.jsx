import React, { Component } from 'react';


class ClientsAddress extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = ()=>{
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
                        {this.props.completedStatus()}%
                        </span> 
                        <h3>Client's Address</h3>
                        <p className="lead">Please enter the client's address in the form below.</p>
                        <hr />
                    </div>
                    <form>
                        <input defaultValue={values["clientsStreet"]} onChange={handleChange("clientsStreet")} className="form-control" type="text" placeholder="Street"></input>
                        <br />
                        <input defaultValue={values["clientsCity"]} onChange={handleChange("clientsCity")} className="form-control" type="text" placeholder="City"></input>
                        <br />
                        <select defaultValue={values["clientsState"]} onChange={handleChange("clientsState")} className="form-control" type="text" placeholder="State">
                            <option value="">Select State</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>				
                        <br />
                        <input defaultValue={values["clientsZip"]} onChange={handleChange("clientsZip")} className="form-control" type="text" placeholder="Zip"></input>
                        <br />
                        <button onClick={this.back} className="btn btn-info">Go Back</button>{' '}
                        <button onClick={this.continue} className="btn btn-info">Continue</button>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }
}

export default ClientsAddress;