import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorDark,
  fontColorLight,
  sliderBackColor,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: BgColor,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  right: {
    paddingHorizontal: 15 * widthRef,
  },
  quizzes: {
    flexDirection: 'row',
    padding: 17,
    borderRadius: 5,
    justifyContent: 'flex-start',
    backgroundColor: textBackColor,
    alignItems: 'center',
  },
});
