import {StyleSheet} from 'react-native';
import {
  BorderColor,
  fontColorLight,
  IconDimColor,
} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: BorderColor,
    paddingVertical: 10,
  },
  itemStyle: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  mapText: {
    fontSize: 10,
    color: '#0D7B8D',
  },
  offerText: {
    fontSize: 10,
    color: '#C2C2C2',
  },
  img: {
    height: 18,
    width: 18,
  },
  ImageIconStyle: {
    height: 22 * heightRef,
    width: 24 * heightRef,
  },
  images: {
    tintColor: fontColorLight,
  },
});
