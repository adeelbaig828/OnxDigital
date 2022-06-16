import {CONVERT_COINS, GET_COINS, GET_COINS_HISTORY} from './CoinsActions';

const initialState = {
  _coins_history: [],
  _convert_coins: null,
  subjects: null,
};

const CoinsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        subjects: action.payload,
      };
    case CONVERT_COINS:
      return {
        ...state,
        _convert_coins: action.payload,
      };
    case GET_COINS_HISTORY:
      return {
        ...state,
        _coins_history: action.payload,
      };
    default:
      return state;
  }
};
export default CoinsReducers;
