import axios from 'axios';
import { apiurl } from "../../../ApiUrl"
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
export function allContacts(page) {
  return function (dispatch) {
    return axios.get(
      apiurl + "contacts",
      {
        params: {},
        cancelToken: source.token

      }).then(function (response) {
        dispatch({ type: 'GET_CONTACT_LIST_SUCCESS', payload: response.data.data })
      }).catch(function (error) {
        dispatch({ type: 'GET_CONTACT_LIST_FAIL', payload: error })
      }
      );

  }
}


export function getSingleContactByID(userID) {
  return function (dispatch) {
    return axios.get(
      apiurl + "contacts/" + userID,
      {
        params: {},
        cancelToken: source.token
      }).then(function (response) {
        dispatch({ type: 'GET_CONTACT_DETAILS_SUCCESS', payload: response.data })
      }).catch(function (error) {
        dispatch({ type: 'GET_CONTACT_DETAILS_FAIL', payload: error })
      }
      );

  }
}
export function getContactByCompanyID(userID) {
  return function (dispatch) {
    return axios.get(
      apiurl + "contacts/" + userID,
      {
        params: {}, 
        cancelToken: source.token

      }).then(function (response) {
        dispatch({ type: 'GET_CONTACT_DETAILS_SUCCESS', payload: response.data })
      }).catch(function (error) {
        dispatch({ type: 'GET_CONTACT_DETAILS_FAIL', payload: error })
      }
      );

  }
}
export function getCompanyByRevenue(userID) {
  return function (dispatch) {
    return axios.get(
      apiurl + "contacts/" + userID,
      {
        params: {},
        cancelToken: source.token

      }).then(function (response) {
        dispatch({ type: 'GET_CONTACT_DETAILS_SUCCESS', payload: response.data })
      }).catch(function (error) {
        dispatch({ type: 'GET_CONTACT_DETAILS_FAIL', payload: error })
      }
      );

  }
}

export function getContactByName(userID) {
  return function (dispatch) {
    return axios.get(
      apiurl + "contacts/" + userID,
      {
        params: {},
        cancelToken: source.token

      }).then(function (response) {
        dispatch({ type: 'GET_CONTACT_DETAILS_SUCCESS', payload: response.data })
      }).catch(function (error) {
        dispatch({ type: 'GET_CONTACT_DETAILS_FAIL', payload: error })
      }
      );

  }
}