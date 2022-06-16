import {print} from 'src/config/function';
import {
  ADD_ADDRESS,
  GET_ALL_ADDRESSES,
  GET_ALL_PACKAGES,
  GET_PAYMENTS,
  USERS_COINS_DATA,
} from './PaymentActions';

const initialState = {
  methods: null,
  packages: null,
  addressesData: {},
  submitUsersData: {},
};

const PaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAYMENTS:
      return {
        ...state,
        methods: action.payload,
      };
    case GET_ALL_PACKAGES:
      return {
        ...state,
        packages: action.payload,
      };
    case ADD_ADDRESS:
      return {
        ...state,
        packages: action.payload,
      };
    case USERS_COINS_DATA:
      return {
        ...state,
        submitUsersData: action.payload,
      };
    case GET_ALL_ADDRESSES:
      return {
        ...state,
        addressesData: action.payload,
      };
    default:
      return state;
  }
};
export default PaymentReducer;
