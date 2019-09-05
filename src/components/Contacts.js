import React, { Component, Fragment } from 'react';
import { Layout, List, Avatar, Button, Skeleton, Row, Col, Tabs } from 'antd';
import reqwest from 'reqwest';
const { Header, Content } = Layout;
const { TabPane } = Tabs;

const count = 5;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initLoading: true,
            loading: false,
            data: [],
            list: [],

        };
    }
    componentDidMount() {
        this.getData(res => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }

    getData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: res => {
                callback(res);
            },
        });
    };

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.results);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                    // In real scene, you can using public method of react-virtualized:
                    // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };


    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.onLoadMore}>loading more</Button>
                </div>
            ) : null;


        return (
            <Fragment>
                <Header style={{ background: '#002766' }}>
                    <div className="logo"  >
                        <img style={{ maxWidth: '120px' }} src="https://www.leadbook.com/wp-content/uploads/2018/06/leadbook-logo-light-hi-res.png" alt="Lead book" />
                    </div>

                </Header>
                <Content style={{ padding: '50px 50px 0' }}>

                    <div style={{minHeight: "calc(100vh - 183px)" }}>
                        <Row type="flex" justify="center" align="middle">
                            <Col span={8}>
<div style={{backgroundColor:'#fff', padding:'50px', paddingLeft:'5px'}} >
<Tabs defaultActiveKey="1" tabPosition='left' >
                                    <TabPane tab="All Contacts" key="1">
                                        <List
                                            className="demo-loadmore-list"
                                            loading={initLoading}
                                            itemLayout="horizontal"
                                            loadMore={loadMore}
                                            dataSource={list}
                                            renderItem={item => (
                                                <List.Item
                                                    actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                                                >
                                                    <Skeleton avatar title={false} loading={item.loading} active>
                                                        <List.Item.Meta
                                                            avatar={
                                                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                                            }
                                                            title={<a href="https://ant.design">{item.name.last}</a>}
                                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                                        />

                                                    </Skeleton>
                                                </List.Item>
                                            )}
                                        />
                                    </TabPane>
                                    <TabPane tab="Fev Contacts" key="2">
                                        <List
                                            className="demo-loadmore-list"
                                            loading={initLoading}
                                            itemLayout="horizontal"
                                            loadMore={loadMore}
                                            dataSource={list}
                                            renderItem={item => (
                                                <List.Item
                                                    actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                                                >
                                                    <Skeleton avatar title={false} loading={item.loading} active>
                                                        <List.Item.Meta

                                                            title={<a href="https://ant.design">{item.name.last}</a>}
                                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                                        />

                                                    </Skeleton>
                                                </List.Item>
                                            )}
                                        />
                                    </TabPane>

                                </Tabs>
</div>
                                

                            </Col>
                        </Row>


                    </div>
                </Content>

            </Fragment>

        );
    }
}

export default Contacts;
