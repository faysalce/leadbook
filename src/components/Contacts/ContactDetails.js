import React, { PureComponent } from 'react';
import { Table, Input, Button, Icon } from 'antd';


import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import ErrorBoundary from "../ErrorBoundary"
import { allContacts } from "./actions";
import '../style.css'
import Contacts from '.';

class ContactDetails extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            

        };
        this._isMounted = false;

       
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
    componentWillUnmount() {
        this._isMounted = false;

    }
    onSelectChange = (selectedRowKeys, rows) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        console.log('Rows changed: ', rows);


        this.setState({ selectedRowKeys });
    };
    handleChangedTable = (pagination, filters, sorter, data) => {
        // console.log('Various parameters', pagination, filters, sorter);
        // console.log(data.currentDataSource);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,

        });
    };
   

    render() {
      

        return (
            <ErrorBoundary>
                <p>
                    
                </p>
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
    )(ContactDetails)
);



