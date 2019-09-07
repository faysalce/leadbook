import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import Login from "./userAuth/Login"
import Contacts from "./Contacts";
import ErrorBoundary from "./ErrorBoundary";
const { Footer } = Layout;



class PageLayout extends Component {

  componentDidMount() {

    this.props.auth ? this.props.history.push("/contacts/all") : this.props.history.push("/login")


  }

  render() {

    return (
      <Layout className="layout">

        <ErrorBoundary>
          <Switch>
            <Route exact path='/login' component={() => <Login />} />
            <Route path='/contacts' component={() => <Contacts />} />

          </Switch>
        </ErrorBoundary>

        <Footer style={{ textAlign: 'center' }}>Lead Book ©2019 Created Faysal</Footer>
      </Layout>

    );
  }
}


function mapStateToProps(store) {
  return {
    auth: store.user.auth,

  };
}
const mapDispatchToState = (dispatch, ownProps) => {
  return {
    // userLogin: (user,password) => dispatch(allContacts(user,password)),


  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToState
  )(PageLayout)
);