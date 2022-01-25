import {combineReducers} from 'redux';
import AuthReducer from './Reducers/Auth/AuthReducers';
import PaymentReducer from './Reducers/Payments/PaymentReducers';
import TournamentReducers from './Reducers/Tournaments/TournamentsReducers';

const reducers = combineReducers({
  auth: AuthReducer,
  payment: PaymentReducer,
  tournaments: TournamentReducers,
});

export default reducers;
