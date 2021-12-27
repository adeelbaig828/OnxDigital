import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorDark,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {fontRef, fullWidth, heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: BgColor,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 13 * widthRef,
  },
  imageStyle: {
    resizeMode: 'contain',
    height: 180 * heightRef,
    justifyContent: 'center',
    width: fullWidth,
    marginTop: 10,
  },
});
