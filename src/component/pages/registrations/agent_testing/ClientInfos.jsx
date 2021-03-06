import React, {Component}from 'react'

class ClientInfos extends Component {
    
    continue =()=>{
        this.props.nextStep();
    }

    render() { 
        const {values, handleChange} = this.props;
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="mb-4">
                        <span className="badge badge-info badge-lg float-left">
                            %
                        </span> 
                    <h3>Client's Info</h3>
                        <p className="lead">Please enter the client's information in the form below</p>
                        <hr/>
                    </div>
                    <form>
                        <input defaultValue={values["clientsFirst"]} onChange={handleChange("clientsFirst")} className="form-control" type="text" placeholder="Client's First Name"></input>
                        <br />
                        <input defaultValue={values["clientsLast"]} onChange={handleChange("clientsLast")} className="form-control" type="text" placeholder="Client's Last Name"></input>
                        <br />
                        <input defaultValue={values["clientsPhone"]} onChange={handleChange("clientsPhone")} className="form-control" type="phone" placeholder="Client's Phone"></input>
                        <br />
                        <input defaultValue={values["clientsEmail"]} onChange={handleChange("clientsEmail")} className="form-control" type="email" placeholder="Client's Email"></input>
                        <br />
                        <hr/>
                        <button onClick={this.continue} className="btn btn-info float-right">Continue</button>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
       )
    }
}
 
export default ClientInfos;