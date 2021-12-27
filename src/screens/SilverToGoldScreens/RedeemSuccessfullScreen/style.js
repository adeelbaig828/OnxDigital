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
    // backgroundColor: 'red',
  },
  bottomCon: {
    flex: 0.25,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageStyle: {
    marginLeft: 30 * widthRef,
    height: 200 * heightRef,
    width: 200 * heightRef,
  },
  adsBack: {
    overflow: 'hidden',
    width: widthRef * 320,
    borderRadius: 10,
    // backgroundColor: 'red',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  headercolor: {
    fontWeight: '300',
    marginBottom: 5 * heightRef,
  },
});
