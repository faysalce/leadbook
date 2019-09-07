import {combineReducers} from "redux";
import {ContactsReducer} from './Contacts';
import {UserAuth} from './UserAuth'


const Reducers = combineReducers({

  contacts: ContactsReducer,
  user:UserAuth,
  


});


export default Reducers;