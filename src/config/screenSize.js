import {Dimensions} from 'react-native';
const fullHeight = Dimensions.get('window').height;
const heightRef = fullHeight / 672;
const fontRef = fullHeight / 672;
const fullWidth = Dimensions.get('window').width;
const widthRef = fullWidth / 360;
export {fullWidth, fullHeight, heightRef, widthRef, fontRef};
