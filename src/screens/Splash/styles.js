import {StyleSheet} from 'react-native';
import {BgColor, fontColorDark} from 'src/assets/Colors/colors';
import {fontRef, heightRef} from 'src/config/screenSize';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BgColor,
  },
  MainView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.9,
  },
  SplashImg: {
    height: 64 * heightRef,
    width: 64 * heightRef,
  },
  SplashText: {
    color: fontColorDark,
    fontSize: 14 * fontRef,
  },
});
