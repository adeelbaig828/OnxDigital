import axios from 'axios';
import {SERVER_URL} from 'src/Global/env';
export const STUDENT_PROFILE = 'STUDENT_PROFILE';
export const ZONE_QUESTIONS = 'ZONE_QUESTIONS';
export const TOPIC_QUESTIONS = 'TOPIC_QUESTIONS';
export const POPULAR_TOPICS = 'POPULAR_TOPICS';
export const SUBJECT_ZONES = 'SUBJECT_ZONES';
export const SUBJECT_TOPICS = 'SUBJECT_TOPICS';
export const IS_SELECTED = 'IS_SELECTED';
export const USER_ANSWERS = 'USER_ANSWERS';
export const CLEAR_USER_ANSWERS = 'CLEAR_USER_ANSWERS';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const ALL_ANSWERS = 'ALL_ANSWERS';

const BASE_URL = SERVER_URL;

export const GET_STUDENT_PROFILE = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/student/profile`,
    })
      .then(response => {
        dispatch({
          type: STUDENT_PROFILE,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        // dispatch({
        //   type: API_ERROR,
        //   error: error.response.data.message,
        // });
        reject(error.response.data.message);
      });
  });
};
export const QUESTIONS_BY_ZONE = (grade, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/zones/${grade}/questions`,
    })
      .then(response => {
        dispatch({
          type: ZONE_QUESTIONS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        // dispatch({
        //   type: API_ERROR,
        //   error: error.response.data.message,
        // });
        reject(error.response.data.message);
      });
  });
};
export const QUESTIONS_BY_TOPICS = (grade, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/zones/${grade}/questions`,
    })
      .then(response => {
        dispatch({
          type: TOPIC_QUESTIONS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        // dispatch({
        //   type: API_ERROR,
        //   error: error.response.data.message,
        // });
        reject(error.response.data.message);
      });
  });
};
export const TOPICS_BY_SUBJECT = (grade, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/subjects/${grade}/topics`,
    })
      .then(response => {
        dispatch({
          type: SUBJECT_TOPICS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        // dispatch({
        //   type: API_ERROR,
        //   error: error.response.data.message,
        // });
        reject(error.response.data.message);
      });
  });
};
export const ZONES_BY_SUBJECT = (grade, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/subjects/${grade}/zones`,
    })
      .then(response => {
        dispatch({
          type: SUBJECT_ZONES,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        // dispatch({
        //   type: API_ERROR,
        //   error: error.response.data.message,
        // });
        reject(error.response.data.message);
      });
  });
};
export const GET_POPULAR_TOPICS_SUBJECT = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/subjects/1/topics`,
    })
      .then(response => {
        dispatch({
          type: POPULAR_TOPICS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        // dispatch({
        //   type: API_ERROR,
        //   error: error.response.data.message,
        // });
        reject(error.response.data.message);
      });
  });
};
export const SUBMIT_ALL_ANSWERS = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/answers`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: ALL_ANSWERS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        // dispatch({
        //   type: API_ERROR,
        //   error: error.response.data.message,
        // });
        reject(error.response.data.message);
      });
  });
};
export const SELECTED_QUESTIONS = selected => dispatch => {
  return dispatch({
    type: IS_SELECTED,
    payload: selected,
  });
};
export const SUBMIT_FORM_FUNCTION = data => dispatch => {
  return dispatch({
    type: SUBMIT_FORM,
    payload: data,
  });
};
export const QUESTION_ANSWERS = data => dispatch => {
  console.log('QUESTION_ANSWERS', data),
    dispatch({
      type: USER_ANSWERS,
      payload: data,
    });
};
export const CLEAR_QUESTION_ANSWERS = () => dispatch => {
  dispatch({
    type: CLEAR_USER_ANSWERS,
  });
};
