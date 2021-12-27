import {combineReducers} from 'redux';
import AuthReducer from './Reducers/Auth/AuthReducers';

const reducers = combineReducers({
  auth: AuthReducer,
});

export default reducers;
