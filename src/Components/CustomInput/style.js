import {StyleSheet} from 'react-native';
import {
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {heightRef} from 'src/config/screenSize';

export const styles = StyleSheet.create({
  input: {
    height: 40 * heightRef,
    padding: 10,
    shadowColor: '#000',

    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    color: fontColorLight,
    marginVertical: 10,
  },
  icon: {
    position: 'absolute',
    right: 4,
    color: fontColorDark,
  },
});
