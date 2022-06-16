import {
  API_PENDING,
  API_ERROR,
  USER_LOGIN,
  EDIT_USER_PROFILE,
  LOG_OUT,
  ROLE,
  OTP_GENERATE,
  OTP_VERIFY,
  GRADE_SELECTION,
  FAV_SUBJECT,
  ALL_SCHOOL,
  SELECT_SCHOOL,
  ALL_GRADES,
  ALL_SUBJECT,
  LOGIN_EMAIL,
  ALL_SECTIONS,
  SELECT_SECTION,
  ALL_BRANCHES,
  BRANCH_SELECTION,
  REGISTER_EMAIL,
  CLEAR_LOGOUT_TOKEN,
  CLEAR_TOKEN,
  PASSWORD_RESET,
  OTP_CHANGE_PASSWORD,
  ALL_SLIDER,
} from './AuthActions';

const initialState = {
  loading: false,
  data: '',
  verifyData: '',
  emailRegister: '',
  selectsectionData: '',
  favSubject: '',
  sectionsData: '',
  branchesData: '',
  selectBranches: '',
  loginData: '',
  userProfile: null,
  userRole: null,
  changePassword: null,
  resetPassword: null,
  allschool: null,
  allgrades: null,
  allSliderImages: null,
  allSubject: null,
  selectschool: null,
  token: null,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case OTP_GENERATE:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case OTP_VERIFY:
      return {
        ...state,
        verifyData: action.payload,
        token: action?.payload?.data?.access_token,
        loading: false,
      };
    case REGISTER_EMAIL:
      return {
        ...state,
        emailRegister: action.payload,
        loading: false,
      };
    case SELECT_SECTION:
      return {
        ...state,
        selectsectionData: action.payload,
        loading: false,
      };
    case LOGIN_EMAIL:
      return {
        ...state,
        loginData: action.payload,
        token: action.token,
        loading: false,
      };
    case ALL_SECTIONS:
      return {
        ...state,
        sectionsData: action.payload,
        loading: false,
      };
    case ALL_BRANCHES:
      return {
        ...state,
        branchesData: action.payload,
        loading: false,
      };
    case BRANCH_SELECTION:
      return {
        ...state,
        selectBranches: action.payload,
        loading: false,
      };
    case FAV_SUBJECT:
      return {
        ...state,
        favSubject: action.payload,
        loading: false,
      };
    case ALL_SUBJECT:
      return {
        ...state,
        allSubject: action.payload,
        loading: false,
      };
    case ALL_SLIDER:
      return {
        ...state,
        allSliderImages: action.payload,
        loading: false,
      };
    case GRADE_SELECTION:
      return {
        ...state,
        gradeSelection: action.payload,
        loading: false,
      };
    case ALL_SCHOOL:
      return {
        ...state,
        allschool: action.payload,
        loading: false,
      };
    case PASSWORD_RESET:
      return {
        ...state,
        resetPassword: action.payload,
        loading: false,
      };
    case OTP_CHANGE_PASSWORD:
      return {
        ...state,
        changePassword: action.payload,
        loading: false,
      };
    case ALL_GRADES:
      return {
        ...state,
        allgrades: action.payload,
        loading: false,
      };
    case SELECT_SCHOOL:
      return {
        ...state,
        selectschool: action.payload,
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
    case CLEAR_TOKEN:
      return {
        ...state,
        token: [],
      };
    default:
      return state;
  }
};

export default apiReducer;
