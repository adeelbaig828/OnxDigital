import {GET_ALL_PACKAGES, GET_PAYMENTS} from './PaymentActions';

const initialState = {
  methods: null,
  packages: null,
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
    default:
      return state;
  }
};
export default PaymentReducer;
