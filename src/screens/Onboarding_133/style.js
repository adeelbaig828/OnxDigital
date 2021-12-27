import {StyleSheet} from 'react-native';
import {BgColor} from 'src/assets/Colors/colors';
import {heightRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgColor,
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.5,
    paddingHorizontal: 10 * heightRef,
  },
  ButtonContainer: {
    flex: 0.5,
    paddingBottom: 20,
    justifyContent: 'space-between',
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
