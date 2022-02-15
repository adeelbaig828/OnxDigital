import {
  REQ_CHANGE_GRADE,
  STUDENT_PROFILE,
  UPDATE_ADDRESS,
  UPDATE_GENDER,
  UPDATE_NAME,
  UPDATE_PROFILE_EMAIL,
} from './HumburgerActions';

const initialState = {
  changeGradeState: null,
  updateGender: null,
  updateAddress: null,
  updateName: null,
  profileNameUpdate: null,
};

const HumburgerReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_EMAIL:
      return {
        ...state,
        profileNameUpdate: action.payload,
      };
    case UPDATE_NAME:
      return {
        ...state,
        updateName: action.payload,
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        updateAddress: action.payload,
      };
    case UPDATE_GENDER:
      return {
        ...state,
        updateGender: action.payload,
      };
    case REQ_CHANGE_GRADE:
      return {
        ...state,
        changeGradeState: action.payload,
      };
    default:
      return state;
  }
};
export default HumburgerReducers;
