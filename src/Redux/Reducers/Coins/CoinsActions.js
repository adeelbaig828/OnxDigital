import axios from 'axios';
import {print} from 'src/config/function';
import {SERVER_URL} from 'src/Global/env';
export const GET_COINS_HISTORY = 'GET_COINS_HISTORY';
export const GET_COINS = 'GET_COINS';
export const CONVERT_COINS = 'CONVERT_COINS';
export const API_ERROR = 'API_ERROR';

const BASE_URL = SERVER_URL;

export const GET_ALL_COINS = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/coins`,
    })
      .then(response => {
        dispatch({
          type: GET_COINS,
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
export const GET_COINS_PURCHASED_HISTORY = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/coins/history`,
    })
      .then(response => {
        dispatch({
          type: GET_COINS_HISTORY,
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

export const CONVERT_SILVER_COINS_TO_GOLD = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/coins/convert`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: CONVERT_COINS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        // dispatch({
        //   type: API_ERROR,
        //   error: error.response.data.message,
        // });
        reject(error.response.data);
      });
  });
};
