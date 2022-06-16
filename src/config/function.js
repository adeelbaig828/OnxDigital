import {LayoutAnimation} from 'react-native';
import settings from './settings';

export const LayoutAnimate = (time = 500) => {
  LayoutAnimation.configureNext({
    duration: time,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {type: LayoutAnimation.Types.easeInEaseOut},
  });
};

export const Validations = {
  Phone: val => {
    //Pakistan Mobile Number Validator
    let regex = /^((\\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;
    return regex.test(+val);
  },
};

export const validateEmail = email => {
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(String(email));
};

export const print = (...data) => {
  if (settings.logs.functional) {
    if (typeof data[0] === 'object') {
      console.log(JSON.stringify(data[0], null, 2));
    } else console.log(...data);
  }
};
export const networkLogs = (...data) => {
  if (settings.logs.network) {
    console.log(...data);
  }
};
