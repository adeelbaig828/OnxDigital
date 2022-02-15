import {LayoutAnimation} from 'react-native';

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
