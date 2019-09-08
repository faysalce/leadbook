export const UserAuth = (state = {

    auth: localStorage.getItem('leadbook_auth') ? localStorage.getItem('leadbook_auth') : null,


}, action) => {
    switch (action.type) {

        case 'USER_LOGIN_SUCCESS':

            return Object.assign({}, state, {
                auth: true
            })
        case 'USER_LOGIN_FAIL':

            return Object.assign({}, state, {
                auth: false
            })
        case 'SELECT_AUTH_USER_FAIL':
            return Object.assign({}, state, {
                error: action.payload,

            })

        case 'USER_LOGOUT_SUCCESS':

            return Object.assign({}, state, {
                auth: false
            })
        default:
            return state;
    }
};

