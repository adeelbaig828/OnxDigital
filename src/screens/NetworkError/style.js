import {StyleSheet} from 'react-native';
import {BgColor} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    height: 188 * heightRef,
    justifyContent: 'space-between',
    width: 276 * widthRef,
    alignItems: 'center',
  },
  imageStyle: {
    height: 48 * heightRef,
    width: 48 * heightRef,
  },
  coinsRow1: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
