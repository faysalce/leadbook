import React, { Component, Fragment } from 'react';
import { Layout, Row, Col, Menu, Icon, BackTop } from 'antd';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import ErrorBoundary from "../ErrorBoundary";

import ContactsRouter from "./router"
import { userLogout } from "../userAuth/actions";
import '../style.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logout: false
        };
        this._isMounted = false;
        this.logOutUser = this.logOutUser.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        if (!this.props.auth) {
            this.props.history.push("/login")
        }
    }
    componentWillUnmount() {
        this._isMounted = false;

    }
    
    logOutUser = () => {

        this.props.userLogout();
        this.setState({ logout: true });

    }

    render() {

        return (
            <Fragment>
                <Header style={{ background: '#002766' }}>
                    <div className="logo" style={{ float: 'left', width: '120px' }} >
                    <NavLink to="/contacts/all"> 
                    <img style={{ maxWidth: '100%' }} src="https://www.leadbook.com/wp-content/uploads/2018/06/leadbook-logo-light-hi-res.png" alt="Lead book" />
                    </NavLink>
                    </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ background: '#002766', lineHeight: '64px', float: 'right' }}
                    >

                        <Menu.Item key="3" onClick={(event) => this.logOutUser(event)} ><span ><Icon type="logout" />Logout</span></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '25px 50px 0' }}>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>

                            <Menu
                                mode="inline"
                                onClick={this.handleClick}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                                collapsed="false"
                                selectedKeys={[window.location.pathname]}

                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="user" />
                                            Contacts
                                        </span>
                                    }
                                >
                                    <Menu.Item key="/contacts/all"><NavLink to="/contacts/all">Contacts</NavLink></Menu.Item>
                                    <Menu.Item key="/contacts/companies"><NavLink to="/contacts/companies">Companies</NavLink></Menu.Item>

                                </SubMenu>
                            </Menu>

                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <div style={{ minHeight: "calc(100vh - 183px)" }}>
                                <Row type="flex" justify="center" align="middle">
                                    <Col span={26}>
                                        <div style={{ backgroundColor: '#fff' }} >
                                          
                                            <div>
                                                <ErrorBoundary>
                                                    <ContactsRouter {...this.props} />
                                                </ErrorBoundary>


                                            </div>

                                        </div>


                                    </Col>
                                </Row>


                            </div>
                        </Content>
                    </Layout>
                </Content>
                <div>
                <BackTop style={{ color: 'rgba(64, 64, 64, 0.6)' }} />
<strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}>  </strong>
                </div>


            </Fragment>

        );
    }
}



function mapStateToProps(store) {
    return {
        auth: store.user.auth,
        contactsList: store.contacts.contactsList,


    };
}
const mapDispatchToState = (dispatch, ownProps) => {
    return {

        userLogout: (user, password) => dispatch(userLogout(user, password)),
        

    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToState
    )(Contacts)
);