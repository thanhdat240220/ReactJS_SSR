import { combineReducers } from 'redux';
import userReducer from './reducerUser';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    users: userReducer,
    auth: authReducer
});

export default rootReducer;