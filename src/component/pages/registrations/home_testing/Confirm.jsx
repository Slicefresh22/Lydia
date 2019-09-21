import React, { Component } from 'react';
import {Redirect} from'react-router-dom';

class Confirm extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.handleSubmit();
    }

    back = () => {
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="mb-4">
                            <span className="badge badge-info badge-lg float-left">
                                {this.props.completedStatus()}%
                        </span>
                            <h3>Confirmation</h3>
                            <p className="lead">Please review and confirm information below.</p>
                            <hr />
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item lead">First & Last: {values["clientsName"]}</li>
                            <li className="list-group-item lead">Phone Number: {values["clientsPhone"]}</li>
                            <li className="list-group-item lead">Email Address: {values["clientsEmail"]}</li>
                            <li className="list-group-item lead">
                                Full Address: {values["clientsStreet"]} {''}
                                {values["clientsCity"]}, {''}
                                {values["clientsState"]} {''}
                                {values["clientsZip"]} {''}
                            </li>
                            <li className="list-group-item lead">Test Type: {values["clientsCity"]}</li>
                        </ul>
                        <br />
                        <button onClick={this.back} className="btn btn-info">Change</button>{' '}
                        <button onClick={this.continue} className="btn btn-success">Submit</button>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div style={Spacer}></div>
            </div>
        );
    }
}

const Spacer = {
    marginTop: "300px"
}

export default Confirm;