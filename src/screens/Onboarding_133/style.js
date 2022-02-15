import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorDark,
  mediumSizeFont,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {heightRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgColor,
  },
  fullContainer: {
    flex: 1,
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.8,
    paddingHorizontal: 10 * heightRef,
  },
  ButtonContainer: {
    flex: 1,
    paddingBottom: 20 * heightRef,
    paddingTop: 10 * heightRef,
    justifyContent: 'space-evenly',
    paddingHorizontal: 10 * heightRef,
  },
  outerCard: {
    flexDirection: 'row',
    marginTop: 8 * heightRef,
  },
  innerCard: {
    justifyContent: 'space-between',
    width: '100%',
    height: 100 * heightRef,
  },
  upperText: {
    color: fontColorDark,
    fontSize: mediumSizeFont,
  },
  login: {
    color: OnxGreen,
    fontSize: mediumSizeFont,
  },
  imageView: {
    height: 40 * heightRef,
    justifyContent: 'flex-end',
  },
  coinView: {
    justifyContent: 'center',
    paddingBottom: 1 * heightRef,
    alignItems: 'center',
  },
  mainCard: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 125 * heightRef,
  },
  image: {height: 54 * heightRef, width: 38 * heightRef},
  image2: {height: 24 * heightRef, width: 24 * heightRef},
});
