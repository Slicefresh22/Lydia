import React, { Component } from 'react';



class TestTypes extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = () => {
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="mb-4">
                        <span className="badge badge-info badge-lg float-left">{this.props.completedStatus()}%</span>
                        <h3>Test Types</h3>
                        <p className="lead">Please select test types from the options below.</p>
                        <hr />
                    </div>
                    <form>
                        <label >Meth - 1 Location</label> <input id="meth" type="checkbox" />
                        <label >Meth - 2 Locations</label> <input id="meth" type="checkbox" />
                        <label >Meth - 3 Locations</label> <input id="meth" type="checkbox" /><br />
                        <label >Radon</label> <input id="Radon" type="checkbox" /><br />
                        <label >Lead</label> <input id="Lead" type="checkbox" /><br />
                        <label >Mold</label> <input id="Mold" type="checkbox" />
                        <hr/>
                        <button onClick={this.back} className="btn btn-info">Go Back</button>{' '}
                        <button onClick={this.continue} className="btn btn-info">Continue</button>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }
}

export default TestTypes;