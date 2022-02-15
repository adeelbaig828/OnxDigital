import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorDark,
  fontColorLight,
  fontWeight400,
  fontWeight600,
  headerSizeFont,
  mediumSizeFont,
  normalSizeFont,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {fontRef} from 'src/config/screenSize';
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BgColor,
    paddingVertical: 10,
  },
  upperText: {
    color: fontColorDark,
    fontSize: mediumSizeFont,
  },
  login: {
    color: OnxGreen,
    fontSize: mediumSizeFont,
  },
  main: {
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
  },
  textStyleHeader: {
    color: fontColorLight,
    fontSize: headerSizeFont,
    fontWeight: fontWeight600,
    // width: '100%',
  },
  textStyleNormal: {
    marginVertical: '3%',
    color: fontColorLight,
    fontSize: normalSizeFont,
    fontWeight: fontWeight400,
  },
  otpRecieve: {
    marginVertical: '2%',
    color: fontColorLight,
    fontSize: normalSizeFont,
    paddingVertical: 20,
  },
  ButtonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
