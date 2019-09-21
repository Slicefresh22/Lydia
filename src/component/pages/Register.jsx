import React, { Component } from 'react';
import RequestTesting from './RequestTesting';

class Register extends Component {
  render() {
    return (
      <div>
        <h1>Register</h1>

        <form>
			<p>Buyers Agent</p>
			<input type="text" placeholder="Agents Name"></input>
			<input type="text" placeholder="Agent Phone Number"></input>
			<input type="text" placeholder="Agent Email"></input>
			<br></br>
			<input type="text" placeholder="Requested User Name"></input>
			<input type="text" placeholder="Password"></input>
			<br></br>
			<input type="text" placeholder="TC Name"></input>
			<input type="text" placeholder="TC Phone Number"></input>
			<input type="text" placeholder="TC Email"></input>
			<br/>
			<input type="button" className="btn btn-info mt-4" value="Submit"/>
			<br/>
			<br/>
		  </form>

      </div>
    );
  }
}

export default Register;