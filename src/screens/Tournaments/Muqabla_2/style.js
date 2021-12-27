import {StyleSheet} from 'react-native';
import {BgColor, fontColorGray, textBackColor} from 'src/assets/Colors/colors';
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
    flex: 0.85,
    width: '100%',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
  },
  bottomCon: {
    flex: 0.1,
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tabs: {
    width: '100%',
    height: 290 * heightRef,
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
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  headercolor: {
    fontWeight: '300',
    marginBottom: 5 * heightRef,
  },
  iconCont: {
    flexDirection: 'row',
    padding: 8 * heightRef,
    alignItems: 'center',
  },
  iconContHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  book: {
    height: 28 * heightRef,
    width: 28 * heightRef,
  },
  bookBack: {
    borderRadius: (56 / 2) * heightRef,
    backgroundColor: fontColorGray,
    height: 50 * heightRef,
    width: 50 * heightRef,
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    height: 24 * heightRef,
    width: 20 * heightRef,
  },
  imagestyle: {height: 16 * heightRef, width: 16 * heightRef},
  leftCont: {
    flexDirection: 'row',
    height: '100%',
    width: '50%',
    alignItems: 'flex-start',
  },
  date: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 56 * heightRef,
    width: 56 * heightRef,
    paddingHorizontal: 8 * widthRef,
    marginRight: 10 * widthRef,
    backgroundColor: textBackColor,
    borderRadius: 8,
  },
  rightCont: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
});
