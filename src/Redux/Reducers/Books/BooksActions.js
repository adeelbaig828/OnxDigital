import axios from 'axios';
import {SERVER_URL} from 'src/Global/env';
export const ALL_ZONES = 'ALL_ZONES';
export const GET_ZONES_BY_ARENA = 'GET_ZONES_BY_ARENA';
export const GET_ZONES_BY_SUBJECTS_AND_GRADE =
  'GET_ZONES_BY_SUBJECTS_AND_GRADE';
export const ALL_LANGUAGE = 'ALL_LANGUAGE';
export const ARENA_DETAILS = 'ARENA_DETAILS';
export const ZONE_DETAILS = 'ZONE_DETAILS';
export const SUBJECTS_BY_GRADE = 'SUBJECTS_BY_GRADE';
export const API_ERROR = 'API_ERROR';

const BASE_URL = SERVER_URL;

export const GET_ARENA_DETAIL = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/arenas/1`,
    })
      .then(response => {
        dispatch({
          type: ARENA_DETAILS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const GET_SUBJECTS_BY_GRADE = (grade, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/grades/${grade}/subjects`,
    })
      .then(response => {
        dispatch({
          type: SUBJECTS_BY_GRADE,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const GET_ARENA_BY_GRADE = (grade, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/grades/${grade}/arenas`,
    })
      .then(response => {
        dispatch({
          type: ARENA_DETAILS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const ZONE_DETAIL = (ID, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/zones/${ID}`,
    })
      .then(response => {
        dispatch({
          type: ZONE_DETAILS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const GET_ALL_ZONES = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/zones?language_id=1`,
    })
      .then(response => {
        dispatch({
          type: ALL_ZONES,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const ZONES_BY_ARENAS = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/arenas/1/zones?language_id=1`,
    })
      .then(response => {
        dispatch({
          type: GET_ZONES_BY_ARENA,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const ZONES_BY_GRADE_AND_SUBJECTS = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/grades/1/subjects/1/zones`,
    })
      .then(response => {
        dispatch({
          type: GET_ZONES_BY_SUBJECTS_AND_GRADE,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const GET_LANGUAGES = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/languages`,
    })
      .then(response => {
        dispatch({
          type: ALL_LANGUAGE,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('console error ', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
