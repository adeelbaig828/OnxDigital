import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorLight,
  fontWeight400,
  fontWeight600,
  headerSizeFont,
  normalSizeFont,
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
  textStyleNormal: {
    marginVertical: '2%',
    color: fontColorLight,
    fontSize: normalSizeFont,
    fontWeight: fontWeight400,
  },
});
