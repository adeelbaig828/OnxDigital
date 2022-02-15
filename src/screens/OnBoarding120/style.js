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
  flatlistContainer: {
    flexDirection: 'row',
  },
  contentStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignSelf: 'center',
    width: '100%',
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 13 * heightRef,
  },
  bottomCont: {
    flex: 0.9,
    justifyContent: 'center',
  },
});
