import {
  API_PENDING,
  API_SUCCESS,
  API_ERROR,
  USER_LOGIN,
  EDIT_USER_PROFILE,
  LOG_OUT,
  ROLE,
} from './AuthActions';

const initialState = {
  loading: false,
  data: '',
  error: '',
  userProfile: null,
  userRole: null,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case API_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case USER_LOGIN:
      return {
        ...state,
        userProfile: action.user,
        loading: false,
      };
    case EDIT_USER_PROFILE:
      return {
        ...state,
        userProfile: action.data,
        loading: false,
      };
    case LOG_OUT:
      return {
        ...state,
        userProfile: null,
        loading: false,
      };
    case ROLE:
      return {
        ...state,
        userRole: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default apiReducer;
