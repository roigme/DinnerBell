import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';

 class SignInWidget extends Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      baseUrl: this.props.baseUrl,
      logo: 'logo.png',
      features: {
        registration: true,                 // Enable self-service registration flow
        rememberMe: true,                   // Setting to false will remove the checkbox to save username
        //multiOptionalFactorEnroll: true,  // Allow users to enroll in multiple optional factors before finishing the authentication flow.
        //selfServiceUnlock: true,          // Will enable unlock in addition to forgotten password
        //smsRecovery: true,                // Enable SMS-based account recovery
        //callRecovery: true,               // Enable voice call-based account recovery
        router: true,                       // Leave this set to true for the API demo
      },

    });
    this.widget.renderEl({el}, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div />;
  }
};
export default SignInWidget




