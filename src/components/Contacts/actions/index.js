import axios from 'axios';
import { apiurl } from "../../../ApiUrl"
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
export function allContacts(page) {
  return function (dispatch) {
    return axios.get(
      apiurl + "contacts",
      {
        params: {
          page:page
        },
        cancelToken: source.token

      }).then(function (response) {
        dispatch({ type: 'GET_CONTACT_LIST_SUCCESS', payload: response.data.data })
      }).catch(function (error) {
        dispatch({ type: 'GET_CONTACT_LIST_FAIL', payload: error })
      }
      );

  }
}


export function getContactDetailsByID(contactID) {
  return function (dispatch) {
    return axios.get(
      apiurl + "contacts/" + contactID,
      {
        params: {},
        cancelToken: source.token
      }).then(function (response) {
       
        dispatch({ type: 'GET_CONTACT_DETAILS_SUCCESS', payload: response.data.data  })
      }).catch(function (error) {
        dispatch({ type: 'GET_CONTACT_DETAILS_FAIL', payload: error })
      }
      );

  }
}
export function getSingleContactByID(contactID) {
  return function (dispatch) {
    return axios.get(
      apiurl + "contacts/" + contactID,
      {
        params: {},
        cancelToken: source.token
      }).then(function (response) {
      
        dispatch({ type: 'GET_SEARCH_CONTACT_LIST_SUCCESS', payload: [response.data.data] })
      }).catch(function (error) {
        dispatch({ type: 'GET_SEARCH_CONTACT_LIST_FAIL', payload: error })
      }
      );

  }
}
export function getContactByCompanyID(companyID) {
  return function (dispatch) {
    return axios.get(
      apiurl + "contacts",
      {
        params: {
          company_id:companyID
        }, 
        cancelToken: source.token

      }).then(function (response) {
        dispatch({ type: 'GET_SEARCH_CONTACT_LIST_SUCCESS', payload: response.data.data  })
      }).catch(function (error) {
        dispatch({ type: 'GET_SEARCH_CONTACT_LIST_FAIL', payload: error })
      }
      );

  }
}
export function getCompanyByRevenue(reveue) {
  return function (dispatch) {
    return axios.get(
      apiurl + "contacts" ,
      {
        params: {
          revenue_gte:reveue
        },
        cancelToken: source.token

      }).then(function (response) {
        dispatch({ type: 'GET_SEARCH_CONTACT_LIST_SUCCESS', payload: response.data.data  })
      }).catch(function (error) {
        dispatch({ type: 'GET_SEARCH_CONTACT_LIST_FAIL', payload: error })
      }
      );

  }
}

export function getContactByName(name) {
  return function (dispatch) {
    return axios.get(
      apiurl + "contacts" ,
      {
        params: {
          name:name
        },
        cancelToken: source.token

      }).then(function (response) {
        dispatch({ type: 'GET_SEARCH_CONTACT_LIST_SUCCESS', payload: response.data.data  })
      }).catch(function (error) {
        dispatch({ type: 'GET_SEARCH_CONTACT_LIST_FAIL', payload: error })
      }
      );

  }
}