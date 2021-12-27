import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorGray,
  fontColorLight,
  OnxGreen,
  textBackColor,
} from 'src/assets/Colors/colors';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: BgColor,
  },
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeaderStyle: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: BgColor,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionHeaderfontStyle: {
    fontSize: 14 * fontRef,
    padding: 5,
    color: fontColorLight,
  },
  sectionHeaderfontend: {
    fontSize: 14 * fontRef,
    padding: 5,
    color: OnxGreen,
  },
  sectionListItemStyle: {
    fontSize: 15,
    padding: 15,
    color: '#000',
    backgroundColor: fontColorGray,
  },
  listItemSeparatorStyle: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  flatlistContainer: {
    width: 360 * widthRef,
    paddingHorizontal: 20,
  },
  leftCont: {
    flexDirection: 'row',
    height: '100%',
    width: '60%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  date: {
    height: 56 * heightRef,
    width: 56 * heightRef,
    marginRight: 10 * widthRef,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  rightCont: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 40 * widthRef,
    alignSelf: 'flex-start',
  },
  imageleft: {
    height: 48 * heightRef,
    width: 48 * heightRef,
  },
  ButtonContainer: {
    width: '100%',
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
