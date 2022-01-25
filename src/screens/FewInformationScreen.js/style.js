import {StyleSheet} from 'react-native';
import {BgColor} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgColor,
    paddingHorizontal: 5 * widthRef,
  },
  bottomContainer: {
    flex: 0.2,
    // backgroundColor: 'red',
  },
  ButtonContainer: {
    height: 150 * heightRef,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // paddingBottom: 10,
  },
});
