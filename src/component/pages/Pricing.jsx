import React, { Component } from 'react';

class Pricing extends Component {
  render() {
    return (
      <div className="Pricing">
          
    <div className="jumbotron">
    <h1 className="display-4">Pricing for Services</h1>
  </div>

      <h5>Meth</h5>
      <p>1 location $50 <br></br>
          2 locations $80 <br></br>
          3 locations $110 <br></br>
*if redundancy test is required will only be preformed in 1 location</p>

      <h5>Radon</h5><p>$50</p>
      <h5>Mold</h5><p>$50</p>
      <h5>Lead</h5><p>$50</p>
      <h5>Rush Order</h5><p>$10 per test (Meth, Radon, Mold Lead)</p>
        <h5>Save Today!</h5>
        <p>Order more then 1 test and save $5 per additional test ordered</p>
        

*Rush orders will be preformed within 24 hours.<br></br>
*All other orders will be preformed withing 36-48 hours. Holidays & Weekends may affect turn around times. <br></br>
*All test request submited after 2pm will be included in the next days request. 




      </div>
    );
  }
}

export default Pricing;