import axios from 'axios';
import {SERVER_URL} from 'src/Global/env';
export const API_PENDING = 'API_PENDING';
export const OTP_GENERATE = 'OTP_GENERATE';
export const OTP_CHANGE_PASSWORD = 'OTP_CHANGE_PASSWORD';
export const EMAIL_OTP_VERIFY = 'EMAIL_OTP_VERIFY';
export const FORGOT_PASS_EMAIL = 'FORGOT_PASS_EMAIL';
export const PASSWORD_RESET = 'PASSWORD_RESET';
export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const OTP_VERIFY = 'OTP_VERIFY';
export const GRADE_SELECTION = 'GRADE_SELECTION';
export const BRANCH_SELECTION = 'BRANCH_SELECTION';
export const ALL_SCHOOL = 'ALL_SCHOOL';
export const ALL_GRADES = 'ALL_GRADES';
export const ALL_SECTIONS = 'ALL_SECTIONS';
export const ALL_BRANCHES = 'ALL_BRANCHES';
export const ALL_SUBJECT = 'ALL_SUBJECT';
export const SELECT_SCHOOL = 'SELECT_SCHOOL';
export const REGISTER_EMAIL = 'REGISTER_EMAIL';
export const SELECT_SECTION = 'SELECT_SECTION';
export const FAV_SUBJECT = 'FAV_SUBJECT';
export const API_ERROR = 'API_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const EDIT_USER_PROFILE = 'EDIT_USER_PROFILE';
export const LOG_OUT = 'LOG_OUT';
export const ROLE = 'ROLE';
export const CLEAR_TOKEN = 'CLEAR_TOKEN';

const BASE_URL = SERVER_URL;

export const GENERATE_OTP = formData => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${BASE_URL}/student/otp-generate`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: OTP_GENERATE,
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
export const Email_LOGIN = formData => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${BASE_URL}/student/login`,
      data: formData,
    })
      .then(response => {
        resolve(response.data);
        if (response.data.data.access_token) {
          dispatch({
            type: LOGIN_EMAIL,
            payload: response.data,
            token: response.data.data.access_token,
          });
        }
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
export const RESET_PASSWORD = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/student/reset-password`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: PASSWORD_RESET,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error: error,
        });
        reject(error);
      });
  });
};
export const FORGOT_PASSWORD_EMAIL = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/forgot-password/enter-email`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: FORGOT_PASS_EMAIL,
          payload: response.data,
        });
        resolve(response);
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error: error,
        });
        reject(error);
      });
  });
};
export const VERIFY_OTP_EMAIL = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/forgot-password/otp-verify`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: EMAIL_OTP_VERIFY,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error: error,
        });
        reject(error);
      });
  });
};
export const CHANGE_PASSWORD = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/forgot-password/change-password`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: OTP_CHANGE_PASSWORD,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        dispatch({
          type: API_ERROR,
          error: error,
        });
        reject(error);
      });
  });
};
export const VERIFY_OTP = formData => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: `${BASE_URL}/student/otp-verify`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: OTP_VERIFY,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        reject(error.response.data.message);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
      });
  });
};
export const SELECT_GRADE = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/student/grade`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: GRADE_SELECTION,
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
export const SELECT_BRANCH = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/student/branch`,
      data: formData,
    })
      .then(response => {
        // console.log('object', response);
        dispatch({
          type: BRANCH_SELECTION,
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
export const SELECT_FAV_SUBJECT = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/student/subjects`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: FAV_SUBJECT,
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
export const SELECT_SCHOOL_ACT = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/student/school`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: SELECT_SCHOOL,
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
export const COMPLETE_PROFILE = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/student/profile`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: REGISTER_EMAIL,
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
export const SELECT_SECTIONS = (formData, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'post',
      url: `${BASE_URL}/student/section`,
      data: formData,
    })
      .then(response => {
        dispatch({
          type: SELECT_SECTION,
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
export const GET_ALL_SCHOOL = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/schools`,
    })
      .then(response => {
        dispatch({
          type: ALL_SCHOOL,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('object error', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const GET_GRADE = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/grades`,
    })
      .then(response => {
        dispatch({
          type: ALL_GRADES,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('object error', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const GET_ALL_SECTIONS = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/sections`,
    })
      .then(response => {
        dispatch({
          type: ALL_SECTIONS,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('object error', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const GET_BRANCHES = (ID, token) => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/schools/${ID}/branches`,
    })
      .then(response => {
        dispatch({
          type: ALL_BRANCHES,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('object error', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const GET_FAV_SUBJECT = token => dispatch => {
  return new Promise((resolve, reject) => {
    axios({
      headers: {Authorization: `Bearer ${token}`},
      method: 'get',
      url: `${BASE_URL}/subjects`,
    })
      .then(response => {
        dispatch({
          type: ALL_SUBJECT,
          payload: response.data,
        });
        resolve(response.data);
      })
      .catch(error => {
        console.log('object error', error);
        dispatch({
          type: API_ERROR,
          error: error.response.data.message,
        });
        reject(error.response.data.message);
      });
  });
};
export const CLEAR_LOGOUT_TOKEN = () => dispatch => {
  console.log('CLEAR_LOGOUT_TOKEN');
  dispatch({
    type: CLEAR_TOKEN,
  });
};
