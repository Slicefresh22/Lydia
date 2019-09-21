import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RequestTesting3 extends Component {
  render() {
    return (
      <div className="Test Requested">

        
          
          <div className="jumbotron">
					<h1 className="display-4">Test Requested</h1></div>
                  
                 Meth<br></br> 1 Location<br></br>2 Locations<br></br>3 Locations<br></br>
                 Mold<br></br>
                 Lead<br></br>
                Radon<br></br>
                      

                <Link to ="/RequestTesting4"className="btn btn-info mt-4">Next</Link> 
                     <br></br><br></br>
            
                      
                  
                  
          </div>
    );
  }
}

export default RequestTesting3;