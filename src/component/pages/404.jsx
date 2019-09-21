import React, { Component } from 'react';

class Notfound extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="jumbotron">
                    <h4>ERROR</h4>
                    <h1 className="display-4">404</h1>
                    <hr/>
                    <h3>Page Not Found</h3>
                </div>
            </div>
        );
    }
}
 
export default Notfound;