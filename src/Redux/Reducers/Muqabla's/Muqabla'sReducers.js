import {
  ALL_ANSWERS,
  IS_SELECTED,
  STUDENT_PROFILE,
  SUBJECT_TOPICS,
  SUBJECT_ZONES,
  SUBMIT_FORM,
  TOPIC_QUESTIONS,
  USER_ANSWERS,
  ZONE_QUESTIONS,
  CLEAR_USER_ANSWERS,
} from "./Muqabla'sActions";

const initialState = {
  allZones: null,
  studentProfile: null,
  zonesBySubject: {},
  topicsBySubject: {},
  isQuestionsSelected: null,
  zonesQuestions: {},
  topicsQuestions: {},
  submitQuestionAnswers: [],
  submitQuestion: [],
  submitAllQuestion: {},
};

const MuqablasReducers = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_PROFILE:
      return {
        ...state,
        studentProfile: action.payload,
      };
    case TOPIC_QUESTIONS:
      return {
        ...state,
        topicsQuestions: action.payload,
      };
    case ZONE_QUESTIONS:
      return {
        ...state,
        zonesQuestions: action.payload,
      };
    case IS_SELECTED:
      return {
        ...state,
        isQuestionsSelected: action.payload,
      };
    case SUBJECT_TOPICS:
      return {
        ...state,
        topicsBySubject: action.payload,
      };
    case SUBJECT_ZONES:
      return {
        ...state,
        zonesBySubject: action.payload,
      };
    case SUBMIT_FORM:
      return {
        ...state,
        submitQuestion: action.payload,
      };
    case USER_ANSWERS:
      return {
        ...state,
        submitQuestionAnswers: [...state.submitQuestionAnswers, action.payload],
      };
    case ALL_ANSWERS:
      return {
        ...state,
        submitAllQuestion: action.payload,
      };
    case CLEAR_USER_ANSWERS:
      return {
        ...state,
        submitQuestionAnswers: [],
      };
    default:
      return state;
  }
};
export default MuqablasReducers;
