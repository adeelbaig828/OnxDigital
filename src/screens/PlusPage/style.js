import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorLight,
  headerSizeFont,
} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: BgColor,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  underScroll: {width: '100%', alignItems: 'center', paddingHorizontal: 10},
  scrolStyle: {flex: 1, width: '100%'},
  imageStyle: {
    resizeMode: 'contain',
    height: 200 * heightRef,
    width: '80%',
    justifyContent: 'center',
  },
  imageStyleScnd: {
    resizeMode: 'contain',
    height: 200 * heightRef,
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  textHeader: {
    width: '100%',
  },
});
