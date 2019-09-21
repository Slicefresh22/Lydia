import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import Background from '../images/airlevel_whoosh.jpg';
import Logo from '../images/Logo.jpg';

class SigninForm extends Component {
    componentDidMount() {
        const el = ReactDOM.findDOMNode(this);
        this.widget = new OktaSignIn({
            baseUrl: this.props.baseUrl
        });
        this.widget.renderEl({ el }, this.props.onSuccess, this.props.onError);
    }

    componentWillUnmount() {
        this.widget.remove();
        console.log(this.props)
    }

    render() {
        return <div style={{ backgroundImage: `url(${Background})`}} />
    }
};

export default SigninForm;