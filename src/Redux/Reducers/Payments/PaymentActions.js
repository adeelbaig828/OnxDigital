import axios from 'axios';
import {SERVER_URL} from 'src/Global/env';
export const GET_PAYMENTS = 'GET_PAYMENTS';
export const GET_ALL_PACKAGES = 'GET_ALL_PACKAGES';
export const API_ERROR = 'API_ERROR';

const BASE_URL = SERVER_URL;

export const GET_PAYMENT_METHODS = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/payment-methods`,
    })
      .then(response => {
        dispatch({
          type: GET_PAYMENTS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('error', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const GET_PACKAGES = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/packages`,
    })
      .then(response => {
        dispatch({
          type: GET_ALL_PACKAGES,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('error', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};