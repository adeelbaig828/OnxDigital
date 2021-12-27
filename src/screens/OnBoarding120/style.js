import {StatusBar, StyleSheet} from 'react-native';
import {
  BgColor,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {fullHeight, heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgColor,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  MultiColor: {
    backgroundColor: textBackColor,
    padding: 10 * heightRef,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 15 * heightRef,
  },
  bottomCont: {
    flex: 1,
    justifyContent: 'center',
  },
});
