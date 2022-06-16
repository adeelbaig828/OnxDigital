import {combineReducers} from 'redux';
import AuthReducer from './Reducers/Auth/AuthReducers';
import BooksReducers from './Reducers/Books/BooksReducers';
import CoinsReducers from './Reducers/Coins/CoinsReducers';
import HumburgerReducers from './Reducers/HamburgerMenu/HumburgerReducers';
import MuqablasReducers from "./Reducers/Muqabla's/Muqabla'sReducers";
import PaymentReducer from './Reducers/Payments/PaymentReducers';
import TournamentReducers from './Reducers/Tournaments/TournamentsReducers';

const reducers = combineReducers({
  auth: AuthReducer,
  payment: PaymentReducer,
  tournaments: TournamentReducers,
  muqablas: MuqablasReducers,
  booksData: BooksReducers,
  CoinsData: CoinsReducers,
  menuData: HumburgerReducers,
});

export default reducers;
