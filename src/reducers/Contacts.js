let defaultState = {

    error: {},
    contactsList: {},
    favouritContactsList: {},
  
   
  
  
  }
  
  export const ContactsReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'GET_CONTACT_LIST_SUCCESS':
        return Object.assign({}, state, {
          contactsList: action.payload
        })
      case 'GET_CONTACT_LIST_FAIL':
        return Object.assign({}, state, {
          error: action.payload
        })
        case 'GET_CONTACT_DETAILS_SUCCESS':
        return Object.assign({}, state, {
          contactDetails: action.payload
        })
      case 'GET_CONTACT_DETAILS_FAIL':
        return Object.assign({}, state, {
          error: action.payload
        })
      case 'GET_SEARCH_CONTACT_LIST_SUCCESS':
        return Object.assign({}, state, {
            contactsList: action.payload
        })
      case 'GET_SEARCH_CONTACT_LIST_FAIL':
        return Object.assign({}, state, {
          error: action.payload
        })
        case 'GET_FAVOURITE_CONTACT_LIST_SUCCESS':
            return Object.assign({}, state, {
                favouritContactsList: action.payload
            })
        case 'GET_FAVOURITE_CONTACT_LIST_FAIL':
            return Object.assign({}, state, {
              error: action.payload
        })
  
      default:
        return state;
    }
  };
  