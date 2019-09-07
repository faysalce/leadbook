import React, { Component, Fragment } from 'react';
import { Layout, Row, Col, Menu, Icon, Radio, Input } from 'antd';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { getSingleContactByID, getContactByCompanyID, getCompanyByRevenue, getContactByName } from "./actions";
import ErrorBoundary from "../ErrorBoundary";

import ContactsRouter from "./router"
import { userLogout } from "../userAuth/actions";
import '../style.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const { Search } = Input;

class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search_pram: 'name_contact',
            logout: false
        };
        this.logOutUser = this.logOutUser.bind(this);
        this.searchContacts = this.searchContacts.bind(this);
    }

    componentDidMount() {
        if (!this.props.auth) {
            this.props.history.push("/login")
        }
    }
    searchContacts(text) {



    }

    changeSearchParam(value) {
        this.setState({ search_pram: value });
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
                        <img style={{ maxWidth: '100%' }} src="https://www.leadbook.com/wp-content/uploads/2018/06/leadbook-logo-light-hi-res.png" alt="Lead book" />
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
                                defaultSelectedKeys={['10']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                                collapsed="false"

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
                                    <Menu.Item key="10"><NavLink to="/contacts/all">All</NavLink></Menu.Item>
                                    <Menu.Item key="11"><NavLink to="/contacts/favorite">Favorite</NavLink></Menu.Item>

                                </SubMenu>
                            </Menu>

                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <div style={{ minHeight: "calc(100vh - 183px)" }}>
                                <Row type="flex" justify="center" align="middle">
                                    <Col span={20}>
                                        <div style={{ backgroundColor: '#fff' }} >
                                            <div style={{ padding: '24px', borderBottom: '1px solid #e8e8e8' }}>
                                                <Row type="flex" justify="end" align="middle">
                                                    <Col>
                                                        <Radio.Group onChange={(value) => this.changeSearchParam(value)} defaultValue="name_contact" buttonStyle="solid">
                                                            <Radio.Button value="contact_id">Contact ID</Radio.Button>
                                                            <Radio.Button value="company_id">Company ID</Radio.Button>
                                                            <Radio.Button value="name_contact">Name of Contact</Radio.Button>
                                                            <Radio.Button value="company_revenue">Revenue</Radio.Button>
                                                        </Radio.Group>
                                                    </Col>
                                                    <Col>
                                                        <Search
                                                            placeholder="input search text"
                                                            onSearch={(value) => this.searchContacts(value)}
                                                            style={{ width: 200, marginLeft: '8px' }}
                                                        />
                                                    </Col>

                                                </Row>
                                            </div>
                                            <div>
                                                <ErrorBoundary>
                                                   <ContactsRouter {...this.props}/>
                                                </ErrorBoundary>


                                            </div>

                                        </div>


                                    </Col>
                                </Row>


                            </div>
                        </Content>
                    </Layout>
                </Content>

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
        getSingleContactByID: (user, password) => dispatch(getSingleContactByID(user, password)),
        getContactByCompanyID: (user, password) => dispatch(getContactByCompanyID(user, password)),
        getCompanyByRevenue: (user, password) => dispatch(getCompanyByRevenue(user, password)),
        getContactByName: (user, password) => dispatch(getContactByName(user, password)),

    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToState
    )(Contacts)
);