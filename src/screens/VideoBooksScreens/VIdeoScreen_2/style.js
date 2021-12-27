import {StyleSheet} from 'react-native';
import {BgColor, OnxGreen} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: BgColor,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainr: {
    width: 360 * widthRef,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 5 * heightRef,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoPLayer: {
    // width: '100%',
    backgroundColor: 'red',
    // height: 239 * heightRef,
    // height: '25%',
  },
  scndCont: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  months: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  imageleft: {
    width: '100%',
    overflow: 'hidden',
    height: '100%',
    borderRadius: 8,
  },
  date: {
    height: '100%',
    width: 124 * widthRef,
    marginRight: 10 * widthRef,
    // backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 8,
  },
  lock: {
    flexDirection: 'row',
    bottom: 6 * heightRef,
    position: 'absolute',
    justifyContent: 'space-around',
    width: 120 * widthRef,
  },
  tabs: {
    width: 350 * widthRef,
    height: 273 * heightRef,
  },
  button: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 1,
  },
  ooops: {
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHeader: {
    marginTop: 15 * heightRef,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '92%',
  },
  bottomSheetConta: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    width: '95%',
    height: '60%',
  },
  languageCon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 32 * heightRef,
    width: '100%',
  },
  greenContainer: {
    backgroundColor: OnxGreen,
    position: 'absolute',
    marginStart: 2,
    left: 0 * widthRef,
    bottom: 10,
    height: '100%',
    width: 3 * widthRef,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
