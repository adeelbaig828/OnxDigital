import axios from 'axios';
import {SERVER_URL} from '../../../Global/env';
export const API_PENDING = 'API_PENDING';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const EDIT_USER_PROFILE = 'EDIT_USER_PROFILE';
export const LOG_OUT = 'LOG_OUT';
export const ROLE = 'ROLE';

const BASE_URL = SERVER_URL;

export const GETALLUSERS = formData => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${BASE_URL}/api/users`,
    })
      .then(response => {
        dispatch({
          type: API_SUCCESS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        console.log('GETALLUSERS API err', error.response.data.message);
        reject(error.response.data.message);
      });
  });
};

export const LOGIN = formData => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${BASE_URL}/api/auth/login`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: USER_LOGIN,
          user: response.data.user,
        });
        resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        console.log('LOGIN API err', error.response.data.message);
        reject(error.response.data.message);
      });
  });
};

export const SIGNUP = formData => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${BASE_URL}/api/users`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: USER_LOGIN,
          user: response.data.user,
        });
        resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        console.log('SIGNUP API err', error.response.data.message);
        reject(error.response.data.message);
      });
  });
};

export const FORGET_PASSWORD = email => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'put',
      url: `${BASE_URL}/api/auth/forgot/${email}`,
    })
      .then(response => {
        dispatch({
          type: API_SUCCESS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        console.log('FORGET_PASSWORD API err', error.response.data.message);
        reject(error.response.data.message);
      });
  });
};

export const EDIT_PROFILE = (Data, params) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'put',
      url: `${BASE_URL}/api/users/${params}`,
      data: Data,
    })
      .then(response => {
        dispatch({
          type: EDIT_USER_PROFILE,
          data: response.data.user,
        });
        resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        console.log('EDIT_PROFILE API err', error.response.data.message);
        reject(error.response.data.message);
      });
  });
};

export const CHANGE_PASSWORD = (Data, params) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'put',
      url: `${BASE_URL}/api/auth/password/${params}`,
      data: Data,
    })
      .then(response => {
        dispatch({
          type: API_SUCCESS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        console.log('CHANGE_PASSWORD API err', error.response.data.message);
        reject(error.response.data.message);
      });
  });
};

export const LOGOUT = () => dispatch => {
  return new Promise((resolve, reject) => {
    try {
      dispatch({
        type: API_PENDING,
      });
      dispatch({
        type: LOG_OUT,
      });
      resolve({success: true});
    } catch (error) {
      reject({success: false});
    }
  });
};
