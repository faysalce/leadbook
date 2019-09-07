import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col, Layout } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userLogin } from "./actions"
const { Content } = Layout;



class LoginFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {

            auth:false
        };
    }
    componentDidMount(){
        if(this.props.auth){
            this.props.history.push("/contacts/all")
        }
       
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.userLogin(values.username, values.password).then(result => {
                  
                        this.setState({ auth:true});
                        this.props.history.push("/contacts/all")
                        
                  


                }).catch(ex => {


                });

                if(this.props.auth){
                    this.props.history.push("/contacts/all")
                }            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Content style={{ padding: '50px 50px 0' }}>

                <div style={{ background: '#fff', padding: 24, minHeight: "calc(100vh - 183px)" }}>
                    <div className="logo" style={{ textAlign: 'center' }} >
                        <img style={{ maxWidth: '200px', margin: '25px' }} src="https://platform.leadbook.com/static/img/logo-leadbook-long.png" alt="Lead book" />
                    </div>
                    <Row type="flex" justify="center" align="middle">

                        <Col span={6}>
                            <Form onSubmit={this.handleSubmit} className="login-form" >
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Username"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password"
                                            placeholder="Password"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>

                                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                                        Log in
                                    </Button>

                                </Form.Item>
                            </Form>

                        </Col>

                    </Row>
                </div>
            </Content>

        );
    }
}
const Login = Form.create({ name: 'register' })(LoginFrom);

function mapStateToProps(store) {
    return {
        auth: store.user.auth,

    };
}
const mapDispatchToState = (dispatch, ownProps) => {
    return {
        userLogin: (user, password) => dispatch(userLogin(user, password)),


    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToState
    )(Login)
);