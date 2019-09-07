

export function userLogin(user, password) {

    return function (dispatch) {
        if (user === 'leadbook' && password === '123456') {
            dispatch({ type: 'USER_LOGIN_SUCCESS', payload: '' })

            localStorage.setItem('leadbook_auth', true);
        } else {
            
            localStorage.removeItem('leadbook_auth');
            dispatch({ type: 'USER_LOGIN_FAIL', payload: '' })
        }

    }

}
export function userLogout(user, password) {

    return function (dispatch) {
     
            localStorage.removeItem('leadbook_auth');
            dispatch({ type: 'USER_LOGOUT_SUCCESS', payload: '' })
       
    }

}