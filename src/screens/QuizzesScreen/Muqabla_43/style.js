import {StyleSheet} from 'react-native';
import {BgColor} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: BgColor,
  },
  upperCon: {
    flex: 0.6,
    width: '100%',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
  },
  bottomCon: {
    flex: 0.35,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageStyle: {
    marginLeft: 30 * widthRef,
    height: 200 * heightRef,
    width: 200 * heightRef,
  },
  adsBack: {
    width: widthRef * 328,
    height: 140 * heightRef,
    borderRadius: 10,
    // backgroundColor: 'red',
    overflow: 'hidden',
  },
  headercolor: {
    fontWeight: '300',
    marginBottom: 5 * heightRef,
  },
  mainRow: {
    flexDirection: 'row',
  },
  coinsStyle: {
    height: 32 * heightRef,
    width: 32 * heightRef,
  },
  leftImages: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
  },
  rightImages: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
  },
});
