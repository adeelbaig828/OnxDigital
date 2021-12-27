import {StyleSheet} from 'react-native';
import {BgColor} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: BgColor,
  },
  upperCon: {
    flex: 0.6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomCon: {
    // flex: 0.2,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageStyle: {
    marginLeft: 30 * widthRef,
    height: 200 * heightRef,
    width: 200 * heightRef,
  },
});
