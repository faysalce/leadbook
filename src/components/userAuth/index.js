import React, { Component } from 'react';
import Login from "./Login";
import ErrorBoundary from "../ErrorBoundary";



class LoginPage extends Component {
  constructor(props) {
    super(props)
    
  }


  render() {

    return (
     

        <ErrorBoundary>
          <Login {...this.props}/> 
        </ErrorBoundary>



    );
  }
}

export default LoginPage;
