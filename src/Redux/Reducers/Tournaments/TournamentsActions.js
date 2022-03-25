import axios from 'axios';
import {SERVER_URL} from 'src/Global/env';
export const GET_PRIZES = 'GET_PRIZES';
export const API_ERROR = 'API_ERROR';
export const GET_ALL_TOURNAMNETS = 'GET_ALL_TOURNAMNETS';
export const GET_SCORE = 'GET_SCORE';
export const GET_TOURNAMNET_PROGRESS = 'GET_TOURNAMNET_PROGRESS';
export const GET_TOURNAMNET = 'GET_TOURNAMNET';

const BASE_URL = SERVER_URL;

export const GET_ALL_PRIZES = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/prizes`,
    })
      .then(response => {
        dispatch({
          type: GET_PRIZES,
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
export const GET_ALL_TOURNAMENTS = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/tournaments`,
    })
      .then(response => {
        dispatch({
          type: GET_ALL_TOURNAMNETS,
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
export const GET_SINGLE_TOURNAMENTS = (ID, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/tournaments/${ID}`,
    })
      .then(response => {
        // console.log('quizzesChapters', JSON.stringify(response, null, 3));
        dispatch({
          type: GET_TOURNAMNET,
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
export const GET_TOURNAMENTS_PROGRESS = (ID, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/tournaments/${ID}/progress`,
    })
      .then(response => {
        // console.log('quizzesChapters', JSON.stringify(response, null, 3));
        dispatch({
          type: GET_TOURNAMNET_PROGRESS,
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
export const GET_ATTEMPT_SCORE = (ID, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/attempt/${ID}`,
    })
      .then(response => {
        // console.log('quizzesChapters', JSON.stringify(response, null, 3));
        dispatch({
          type: GET_SCORE,
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
