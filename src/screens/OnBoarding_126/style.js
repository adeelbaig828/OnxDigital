import {StyleSheet} from 'react-native';
import {BgColor} from 'src/assets/Colors/colors';
import {heightRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgColor,
  },
  container2: {
    flex: 1,
    backgroundColor: BgColor,
    justifyContent: 'space-between',
    paddingHorizontal: 15 * heightRef,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
