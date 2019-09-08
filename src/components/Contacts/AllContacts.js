import React, { PureComponent } from 'react';
import { Table, Input, Button, Icon, Radio, Row, Col} from 'antd';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import ErrorBoundary from "../ErrorBoundary"
import { allContacts, getSingleContactByID, getContactByCompanyID, getCompanyByRevenue, getContactByName } from "./actions";
import '../style.css'
const { Search } = Input;

class AllContacts extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            data: this.props.contactsLis,
            list: this.props.contactsLis,
            page: 1,
            search_pram: 'name_contact',
            searchText: '',
            selectedRowKeys: [],
            filteredInfo: null,
            sortedInfo: null,
            selectedContact: {},

        };
        this._isMounted = false;

        this.handleChangedTable = this.handleChangedTable.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    componentDidMount() {
        this._isMounted = true;

        this.setState({
            loading: true,
        });
        this._isMounted && this.getAllContactsList(this.state.page);
    }
    componentWillUnmount() {
        this._isMounted = false;
        
    }
    onSelectChange = (selectedRowKeys, rows) => {


        this.setState({ selectedRowKeys });
    };

    getAllContactsList(page){
        this.props.allContacts(page).then(result => {

         this.setState({
                data: this.props.contactsLis,
                list: this.props.contactsList,
                page: this.state.page + 1,
                loading: false,
            });

        }).catch(ex => {


        });
    }
    searchContacts(text) {

        this.setState({
            loading: true,
        });
        if (text) {
            if (this.state.search_pram === "contact_id") {

                this._isMounted && this.props.getSingleContactByID(text).then(result => {

                    this._isMounted && this.setState({
                        data: this.props.contactsLis,
                        list: this.props.contactsList,
                        page: this.state.page + 1,
                        loading: false,
                    });

                }).catch(ex => {

                });

            } else if (this.state.search_pram === "company_id") {

                this._isMounted && this.props.getContactByCompanyID(text).then(result => {

                    this._isMounted && this.setState({
                        data: this.props.contactsLis,
                        list: this.props.contactsList,
                        page: this.state.page + 1,
                        loading: false,
                    });

                }).catch(ex => {


                });

            } else if (this.state.search_pram === "name_contact") {

                this._isMounted && this.props.getContactByName(text).then(result => {

                    this._isMounted && this.setState({
                        data: this.props.contactsLis,
                        list: this.props.contactsList,
                        page: this.state.page + 1,
                        loading: false,
                    });

                }).catch(ex => {


                });

            } else if (this.state.search_pram === "company_revenue") {

                this._isMounted && this.props.getCompanyByRevenue(text).then(result => {

                    this._isMounted && this.setState({
                        data: this.props.contactsLis,
                        list: this.props.contactsList,
                        page: this.state.page + 1,
                        loading: false,
                    });

                }).catch(ex => {


                });
            }
        } else {

            this.getAllContactsList(this.state.page);
        }


    }

    changeSearchParam(event) {
        this.setState({ search_pram: event.target.value });

    }
    handleChangedTable = (pagination, filters, sorter, data) => {
        // console.log('Various parameters', pagination, filters, sorter);
        // console.log(data.currentDataSource);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,

        });
    };
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
            </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
            </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        let { sortedInfo, filteredInfo, loading, selectedRowKeys } = this.state;
        let { contactsList } = this.props;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        let allContactslist = [];
        if (contactsList) {
            if (contactsList.length > 0) {
                contactsList.map((navitem, i) => {
                    var item = { 'key': navitem.id, 'id': navitem.id, 'name': navitem.name, 'email': navitem.email, 'company': navitem.company.name, 'companyID': navitem.company.id, 'country': navitem.company.country, 'revenue': navitem.company.revenue };
                    return allContactslist.push(item);
                })
            }
        }


        let companyUnique = [];
        if (contactsList) {
            if (contactsList.length > 0) {

                let unique = contactsList.map(item => item.company.name)
                    .filter((value, index, self) => self.indexOf(value) === index);

                unique.map((navitem, i) => {
                    var item = { 'text': navitem, 'value': navitem };
                    return companyUnique.push(item);
                })
            }
        }
        let revenueUnique = [];
        if (contactsList) {
            if (contactsList.length > 0) {

                let unique = contactsList.map(item => item.company.revenue)
                    .filter((value, index, self) => self.indexOf(value) === index);

                unique.map((navitem, i) => {
                    var item = { 'text': navitem, 'value': navitem };
                    return revenueUnique.push(item);
                })
            }
        }
        let countryUnique = [];
        if (contactsList) {
            if (contactsList.length > 0) {

                let unique = contactsList.map(item => item.company.country)
                    .filter((value, index, self) => self.indexOf(value) === index);

                unique.map((navitem, i) => {
                    var item = { 'text': navitem, 'value': navitem };
                    return countryUnique.push(item);
                })
            }
        }
        const allContactsCollum = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
                render: (text, record) => <Link to={"/contact/" + record.id}>{text}</Link>,
                sorter: (a, b) => (a, b) => a.id.length - b.id.length,
                sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
                //...this.getColumnSearchProps('name'),

            }, {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                //render: (text, record) => <Link to={"/contact/" + record.id}>{text}</Link>,
                sorter: (a, b) => (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
                ...this.getColumnSearchProps('name'),
                render: (text, record) => <Link to={"/contact/" + record.id}>{text}</Link>,

            }, {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
                sorter: (a, b) => (a, b) => a.email.length - b.email.length,
                sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
                ...this.getColumnSearchProps('email'),
            }, {
                title: 'Company Name',
                dataIndex: 'company',
                key: 'company',
                defaultSortOrder: 'descend',
                filters: companyUnique,
               

                filteredValue: filteredInfo.company || null,
                onFilter: (value, record) => record.company.includes(value),

                sorter: (a, b) => (a, b) => a.company.length - b.company.length,
                sortOrder: sortedInfo.columnKey === 'company' && sortedInfo.order,

            }, {
                title: 'Country',
                dataIndex: 'country',
                key: 'country',
                defaultSortOrder: 'descend',

                filters: countryUnique,
                filteredValue: filteredInfo.country || null,
                onFilter: (value, record) => record.country.includes(value),

                sorter: (a, b) => (a, b) => a.country.length - b.country.length,
                sortOrder: sortedInfo.columnKey === 'country' && sortedInfo.order,

            }, {
                title: 'Revenue',
                dataIndex: 'revenue',
                key: 'revenue',
                defaultSortOrder: 'descend',

                filters: revenueUnique,
                filteredValue: filteredInfo.revenue || null,
                onFilter: (value, record) => record.revenue.includes(value),

                sorter: (a, b) => (a, b) => a.revenue.length - b.revenue.length,
                sortOrder: sortedInfo.columnKey === 'revenue' && sortedInfo.order,

            }
        ];

        return (
            <ErrorBoundary>
                <div style={{ padding: '24px', borderBottom: '1px solid #e8e8e8' }}>
                    <Row type="flex" justify="end" align="middle">
                        <Col>
                            Search contact by : 
                            <Radio.Group style={{marginLeft:'10px'}} onChange={(value) => this.changeSearchParam(value)} defaultValue="name_contact" buttonStyle="solid">
                                <Radio.Button value="contact_id">Contact ID</Radio.Button>
                                <Radio.Button value="company_id">Company ID</Radio.Button>
                                <Radio.Button value="name_contact">Name of Contact</Radio.Button>
                                <Radio.Button value="company_revenue">Revenue</Radio.Button>
                            </Radio.Group>
                        </Col>
                        <Col>
                            <Search
                                placeholder="type then press enter"
                                onSearch={(value) => this.searchContacts(value)}
                                style={{ width: 200, marginLeft: '8px' }}
                            />
                        </Col>

                    </Row>
                </div>
                <Table
                    dataSource={allContactslist}
                    columns={allContactsCollum}
                    loading={loading}
                    rowSelection={rowSelection}
                    expandedRowRender={record => <p style={{ margin: 0 }}>Company ID : {record.companyID} | Company Name : {record.company} | Company Revenue : {record.revenue} | Company Country : {record.country}</p>}

                    onChange={(pagination, filters, sorter, data) =>
                        this.handleChangedTable(pagination, filters, sorter, data)
                    }
                />
               
            </ErrorBoundary>

        );
    }
}
function mapStateToProps(store) {
    return {
        contactsList: store.contacts.contactsList,

    };
}
const mapDispatchToState = (dispatch, ownProps) => {
    return {
        allContacts: (page) => dispatch(allContacts(page)),
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
    )(AllContacts)
);



