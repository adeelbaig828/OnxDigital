/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Menu, MenuDivider, MenuItem} from 'react-native-material-menu';
import {heightRef, widthRef} from 'src/config/screenSize';
import Text from '../Text';
// import assets from '../../assets';
// import {globalStyles, HEIGHT} from '../../styles';
// import Checkbox from '../Checkbox';
// import Image from '../Image';
// import Text from '../Text';

const ITEM_HEIGHT = 50 * heightRef;
const Dropdown = ({
  rightTextOnPress,
  rightText,
  label,
  labelSize = 13,
  labelWeight = 'normal',
  labelColor,
  value,
  setValue = (val, index) => {},
  onPress,
  items = [],
  showLabelIcon = false,
  style,
  leftIcon,
  children,
  btnStyle,
  arrowColor,
  defaultText,
  multiSelect = false,
  setMulti = data => {},
  disabled = [],
}) => {
  const menuRef = React.useRef(null);
  const flatListRef = React.useRef(null);
  const [width, setWidth] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [multiData, setMultiData] = React.useState([]);
  let marginTop = label !== undefined ? 15 * heightRef : 0;

  return (
    <View
      style={[styles.container(), style]}
      onLayout={event => {
        setWidth(event.nativeEvent.layout.width);
      }}>
      {label && (
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              paddingVertical={10}
              color={labelColor}
              style={{
                fontWeight: labelWeight,
                paddingHorizontal: 10 * widthRef,
              }}
              fontSize={labelSize}>
              {label}
            </Text>
            {/* {showLabelIcon && <Image size={18} source={assets.info} />} */}
          </View>
          <Text
            onPress={rightTextOnPress}
            paddingVertical={10}
            color={'black'}
            style={{
              fontWeight: labelWeight,
              paddingHorizontal: 10 * widthRef,
            }}
            fontSize={labelSize}>
            {rightText}
          </Text>
        </View>
      )}
      <TouchableOpacity
        style={[styles.btn, btnStyle]}
        onPress={() => {
          menuRef.current.show();
          setOpen(true);
        }}>
        <>
          {/* {leftIcon && (
            <Image
              style={styles.image(20 * heightRef, 20 * heightRef)}
              source={leftIcon}
            />
          )} */}
          <Text
            style={{
              fontSize: 13 * heightRef,
              color: arrowColor || 'black',
            }}
            numberOfLines={1}>
            {multiSelect
              ? items
                  .filter(v => value.includes(v.value))
                  .map(v => v.label)
                  .join(', ') || 'Select'
              : items.reduce((acc, item) => {
                  if (item.value === value) return item.label;
                  else return acc;
                }, defaultText || 'Select')}
          </Text>
        </>
        <View
          style={{
            transform: [{rotate: `${!open ? 0 : 180}deg`}],
            position: 'absolute',
            right: 15 * widthRef,
          }}>
          {/* <Image size={15} source={assets.caret_down} /> */}
        </View>
      </TouchableOpacity>
      <Menu
        ref={menuRef}
        onRequestClose={() => {
          menuRef.current.hide();
          setOpen(false);
        }}
        style={{
          width,
        }}>
        <FlatList
          data={items}
          ref={flatListRef}
          onLayout={() => {
            let i = items.findIndex(item => item.value === value);
            flatListRef.current.scrollToOffset({
              offset: i * ITEM_HEIGHT,
              animated: true,
            });
          }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <MenuDivider />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <React.Fragment key={index + 'dropDown' + item.label}>
              <MenuItem
                disabled={disabled.includes(index)}
                pressColor={'red'}
                textStyle={[
                  {
                    color: disabled.includes(index)
                      ? 'grey'
                      : value === item.value
                      ? 'white'
                      : 'black',
                  },
                  multiSelect && {
                    color: 'black',
                  },
                ]}
                style={[
                  {
                    backgroundColor:
                      value === item.value ? 'cyan' : 'transparent',
                    maxWidth: width,
                    overflow: 'hidden',
                    height: ITEM_HEIGHT,
                    maxHeight: ITEM_HEIGHT,
                  },
                  multiSelect && {
                    backgroundColor: multiData.includes(item.value)
                      ? '#F6F6F6'
                      : 'transparent',
                  },
                ]}
                onPress={() => {
                  setOpen(false);
                  setValue(item.value, index);
                  if (multiSelect) {
                    let m = [...multiData];
                    if (m.includes(item.value)) {
                      m = m.filter(v => v != item.value);
                    } else {
                      m.push(item.value);
                    }
                    setMulti(m);
                    setMultiData(m);
                    return;
                  }
                  menuRef.current.hide();
                }}>
                {item.label}
              </MenuItem>
            </React.Fragment>
          )}
        />
      </Menu>
    </View>
  );
};

export default React.memo(Dropdown);

const styles = StyleSheet.create({
  container: (open, len) => [
    {
      marginBottom: 15 * heightRef,
      justifyContent: 'flex-end',
      // height: 56 * heightRef,
      width: '100%',
      // backgroundColor: "red"
    },
  ],
  btn: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    // backgroundColor: ,
    height: 100,
    width: '100%',
    borderRadius: 6,
    color: 'black',
    borderWidth: 1,
    borderColor: '#D2D2D2',
    paddingHorizontal: 20 * widthRef,
    paddingRight: 40 * widthRef,
  },
  image: (height = '100%', width = '100%', contain = true) => ({
    width,
    height,
    resizeMode: contain ? 'contain' : 'cover',
  }),
});
