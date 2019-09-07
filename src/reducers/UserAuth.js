export const UserAuth = (state = {

    auth: localStorage.getItem('leadbook_auth') ? localStorage.getItem('leadbook_auth') : null,


}, action) => {
    switch (action.type) {

        case 'USER_LOGIN_SUCCESS':
            console.log('USER_LOGIN_SUCCESS:', action.payload)

            return Object.assign({}, state, {
                auth: true
            })
            case 'USER_LOGIN_FAIL':
                console.log('USER_LOGIN_FAIL:', action.payload)
    
                return Object.assign({}, state, {
                    auth: false
                })
        case 'SELECT_AUTH_USER_FAIL':
            console.log('SELECT_AUTH_USER_FAIL:', action.payload)
            return Object.assign({}, state, {
                error: action.payload,

            })

        case 'USER_LOGOUT_SUCCESS':
            console.log('USER_LOGOUT_SUCCESS:', action.payload)

            return Object.assign({}, state, {
                auth: false
            })
        default:
            return state;
    }
};

