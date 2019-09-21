import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RequestAddress extends Component {

	continue = ()=>{
		this.props.nextStep();
	}

	goBack = ()=>{
		this.props.prevStep();
	}

	render() {
		const{values, handleChange}= this.props;
		return (
			<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-4">
						<div className="mb-4">
							<span className="badge badge-info badge-lg float-left">
								%
							</span> 
						<h3>Testing Address</h3>
							<p className="lead">Please enter the request address in the form below</p>
							<hr/>
						</div>
						<form>
							<input defaultValue={values["testingStreet"]} onChange={handleChange("testingStreet")} className="form-control" type="text" placeholder="Street" required></input>
							<br />
							<input defaultValue={values["testingCity"]} onChange={handleChange("testingCity")} className="form-control" type="text" placeholder="City" required></input>
							<br />
							<select defaultValue={values["testingState"]} onChange={handleChange("testingState")} className="form-control" type="text" placeholder="State" required>
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
							<br></br>			
							<input defaultValue={values["testingZip"]} onChange={handleChange("testingZip")} className="form-control" type="text" placeholder="Zipcode" required></input>
							<br />
							<br/>
							<hr/>
							<button onClick={this.continue} className="btn btn-info float-right">Continue</button>
							{"  "}
							<button onClick={this.goBack} className="btn btn-info float-right mr-4">Go Back</button>
						</form>
					</div>
					<div className="col-md-4"></div>
				</div>
		);
	}
}

export default RequestAddress;