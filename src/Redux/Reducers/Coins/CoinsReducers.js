import {GET_COINS} from './CoinsActions';

const initialState = {
  subjects: null,
};

const BooksReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        subjects: action.payload,
      };
    default:
      return state;
  }
};
export default BooksReducers;
