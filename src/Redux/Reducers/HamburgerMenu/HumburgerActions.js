import axios from 'axios';
import {SERVER_URL} from 'src/Global/env';
export const UPDATE_PROFILE_EMAIL = 'UPDATE_PROFILE_EMAIL';
export const UPDATE_GENDER = 'UPDATE_GENDER';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const UPDATE_NAME = 'UPDATE_NAME';

const BASE_URL = SERVER_URL;

export const UPDATE_EMAIL = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/student/email`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: UPDATE_PROFILE_EMAIL,
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
export const UPDATE_PROFILE_NAME = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/student/name`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: UPDATE_NAME,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const UPDATE_PROFILE_ADDRESS = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/student/address`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: UPDATE_ADDRESS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const UPDATE_PROFILE_GENDER = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/student/gender`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: UPDATE_GENDER,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
