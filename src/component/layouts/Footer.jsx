import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() { 
        return ( 
            <footer className="">
                {/*<div className="row" style={footerStyler.wrapper}>
                    <div className="col-md-4 text-white">
                        <br/>
                        <h5 className="lead">GET INVOLVED<hr></hr></h5>
                    </div>
                    <div className="col-md-4 text-white text-center">
                        <br />
                        <h5 className="lead">CONTACT US<hr></hr></h5>
                    </div>
                    <div className="col-md-4 text-white">
                        <br />
                        <h5 className="lead">FOLLOW US ON<hr></hr></h5>
                    </div>
                </div>*/}
                <div style={footerStyler.copyRight} className="footer-copyright text-center text-white">
                    <br />
                    <span style={footerStyler.Span}>© 2019 Copyright</span> <Link style={footerStyler.Link} to="/">Airlevel.com</Link>
                </div>
            </footer>
         );
    }
}

const footerStyler = {
    
    copyRight: {
        height: '60px',
        backgroundColor: '#303030',
    },

    wrapper: {
        margin: '20px 0px 0px 0px',
        height: '160px',
        backgroundColor: '#595959',
    },

    Link: {
        textDeclaration: 'none',
        color: 'white'
    },

    Span: {
        color: 'White'
    }
}
export default Footer;