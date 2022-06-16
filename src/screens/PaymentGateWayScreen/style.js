import {StyleSheet} from 'react-native';
import {BgColor} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: BgColor,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardMain: {
    height: '100%',
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainContainr: {
    width: '100%',
    paddingHorizontal: 18,
  },
  innerCard: {height: '100%'},
});
