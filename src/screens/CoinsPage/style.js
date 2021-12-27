import {StyleSheet} from 'react-native';
import {BgColor, fontColorDark} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  outerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerCard: {
    justifyContent: 'space-around',
    width: '100%',
  },
  coinView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
  },
  imageView: {
    justifyContent: 'space-between',
    height: 60 * heightRef,
  },
  seperator: {
    width: 340 * widthRef,
    height: 0.3,
    marginVertical: 20 * heightRef,
    backgroundColor: fontColorDark,
  },
  now: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'flex-start',
  },
  headerCoins: {width: 340 * widthRef},
  leftBox: {
    justifyContent: 'space-between',
    height: 65 * heightRef,
  },
  scndCont: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 68 * widthRef,
    height: 20 * heightRef,
    marginTop: 8 * heightRef,
    borderRadius: 3,
  },
  rightBox: {
    justifyContent: 'flex-end',
    height: 65 * heightRef,
  },
  image: {height: 30 * heightRef, width: 30 * heightRef},
  months: {
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerMain: {width: 260 * widthRef},
  rightCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%',
    alignSelf: 'center',
    height: 35 * heightRef,
  },
  rightSide: {height: '100%', alignItems: 'flex-end'},
});
