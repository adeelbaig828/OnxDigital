import {StyleSheet} from 'react-native';
import {textBackColor} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberBoxStyle: {
    height: heightRef * 20,
    width: widthRef * 25,
    backgroundColor: textBackColor,
    borderRadius: 5,
    marginHorizontal: widthRef * 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
