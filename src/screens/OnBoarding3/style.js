import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorLight,
  fontWeight400,
  fontWeight600,
  headerSizeFont,
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
  main: {
    width: '100%',
    paddingHorizontal: 10,
    // flex: ,
  },
  textStyleHeader: {
    color: fontColorLight,
    fontSize: headerSizeFont,
    fontWeight: fontWeight600,
  },
  textStyleOTPHeader: {
    color: fontColorLight,
    fontSize: headerSizeFont,
    paddingTop: 20,
    fontWeight: fontWeight600,
  },
  textStyleNormal: {
    marginVertical: '2%',
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
  otpResend: {
    marginVertical: '2%',
    color: OnxGreen,
    fontSize: normalSizeFont,
    paddingVertical: 20,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  now: {
    flexDirection: 'row',
    width: '40%',
    // backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loginText: {
    color: fontColorLight,
    fontSize: normalSizeFont,
    fontWeight: fontWeight600,
  },
});
