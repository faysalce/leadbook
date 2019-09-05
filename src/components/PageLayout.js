import React, { Component } from 'react';
import { Layout } from 'antd';
import Login from "./Login";
import Contacts from "./Contacts";
const { Footer } = Layout;



class PageLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: false
    }
  }


  render() {

    return (
      <Layout className="layout">


        {
          this.state.auth ? <Login /> : <Contacts />
        }


        <Footer style={{ textAlign: 'center' }}>Lead Book ©2019 Created Faysal</Footer>
      </Layout>

    );
  }
}

export default PageLayout;
