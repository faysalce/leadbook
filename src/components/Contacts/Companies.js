import React, { PureComponent } from 'react';
import { Table, Input, Button, Icon, Row, Col, Drawer } from 'antd';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import ErrorBoundary from "../ErrorBoundary"
import { allContacts } from "./actions";
import '../style.css'

class Companies extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            data: this.props.contactsLis,
            list: this.props.contactsLis,
            page: 1,
            searchText: '',
            selectedRowKeys: [],
            favoriteRows: [],
            filteredInfo: null,
            sortedInfo: null,

            visible: false

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
        this._isMounted && this.props.allContacts(this.state.page).then(result => {

            this._isMounted && this.setState({
                data: this.props.contactsLis,
                list: this.props.contactsList,
                page: this.state.page + 1,
                loading: false,
            });

        }).catch(ex => {


        });
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    componentWillUnmount() {
        this._isMounted = false;

    }
    onSelectChange = (selectedRowKeys, rows) => {


        this.setState({ selectedRowKeys, favoriteRows: rows });
    };

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
        let { sortedInfo, filteredInfo, loading, selectedRowKeys, favoriteRows } = this.state;
        let { contactsList } = this.props;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        let allContactslist = [];
        let uniquecompany = []

        if (contactsList) {
            if (contactsList.length > 0) {
                contactsList.map((navitem, i) => {
                    var item = { 'key': i, 'name': navitem.company.name, 'id': navitem.company.id, 'country': navitem.company.country, 'revenue': navitem.company.revenue };
                    return allContactslist.push(item);
                })
                uniquecompany = allContactslist.reduce((acc, current) => {
                    const x = acc.find(item => item.name === current.name);
                    if (!x) {
                        return acc.concat([current]);
                    } else {
                        return acc;
                    }
                }, []);
            }
        }





        let revenueUnique = [];
        if (contactsList) {
            if (uniquecompany.length > 0) {

                let unique = uniquecompany.map(item => item.revenue)
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

                let unique = uniquecompany.map(item => item.country)
                    .filter((value, index, self) => self.indexOf(value) === index);

                unique.map((navitem, i) => {
                    var item = { 'text': navitem, 'value': navitem };
                    return countryUnique.push(item);
                })
            }
        }
        const allCompaniesCollum = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
                render: (text, record) => <Link to={"/company/" + record.id}>{text}</Link>,
                sorter: (a, b) => (a, b) => a.id.length - b.id.length,
                sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
                ...this.getColumnSearchProps('id'),

            }, {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                //render: (text, record) => <Link to={"/contact/" + record.id}>{text}</Link>,
                sorter: (a, b) => (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
                ...this.getColumnSearchProps('name'),
                render: (text, record) => <Link to={"/company/" + record.id}>{text}</Link>,

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

        const allFevCollum = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
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

            }, {
                title: 'Country',
                dataIndex: 'country',
                key: 'country',
                defaultSortOrder: 'descend',

                sorter: (a, b) => (a, b) => a.country.length - b.country.length,
                sortOrder: sortedInfo.columnKey === 'country' && sortedInfo.order,

            }, {
                title: 'Revenue',
                dataIndex: 'revenue',
                key: 'revenue',
                defaultSortOrder: 'descend',

                sorter: (a, b) => (a, b) => a.revenue.length - b.revenue.length,
                sortOrder: sortedInfo.columnKey === 'revenue' && sortedInfo.order,

            }
        ];

        return (
            <ErrorBoundary>

                <div style={{ padding: '24px', borderBottom: '1px solid #e8e8e8' }}>
                    <Row type="flex" justify="space-between" align="middle">
                        <Col >
                            <h2>All Companies </h2>
                            <p>Check  to make favorite</p>
                        </Col>
                        <Col >
                            <Button onClick={this.showDrawer} type="primary" block>
                                Show favorites
                             </Button>
                        </Col>

                    </Row>
                </div>
                <Table
                    dataSource={uniquecompany}
                    columns={allCompaniesCollum}
                    loading={loading}
                    rowSelection={rowSelection}

                    onChange={(pagination, filters, sorter, data) =>
                        this.handleChangedTable(pagination, filters, sorter, data)
                    }
                />

                <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <h2> Favorite Companies</h2>
                    <Table
                        dataSource={favoriteRows}
                        columns={allFevCollum}




                    />
                </Drawer>
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
        
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToState
    )(Companies)
);



