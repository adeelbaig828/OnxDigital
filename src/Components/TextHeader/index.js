import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fontColorDark, fontColorLight} from 'src/assets/Colors/colors';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';

const TextHeader = ({
  fontSizeHeader,
  fontSizeDesc,
  Header,
  Description,
  marginTop,
  fontWeight,
  fontWeightDes,
  colorDesc,
  width,
  widthDesText,
  widthHeaderText,
  marginL,
  colorheader,
  alignItemsMain,
  alignItems,
  textAlignDes,
  marginVerticalDes,
  height,
  minHeight,
  textAlignHeader,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          alignItems: alignItemsMain ? alignItemsMain : 'flex-start',
          height: height ? height * heightRef : null,
          minHeight: minHeight ? minHeight * heightRef : null,
          marginTop: marginTop ? marginTop * heightRef : null,
          width: width ? width : '100%',
          marginLeft: marginL ? marginL * widthRef : null,
        },
      ]}>
      <Text
        style={[
          styles.header,
          {
            // backgroundColor: 'red',
            textAlign: textAlignHeader ? textAlignHeader : null,
            width: widthHeaderText ? widthHeaderText : null,
            color: colorheader ? colorheader : fontColorDark,
            fontSize: fontSizeHeader ? fontSizeHeader * fontRef : 16 * fontRef,
            fontWeight: fontWeight ? fontWeight : null,
          },
        ]}>
        {Header}
      </Text>
      {Description ? (
        <Text
          style={[
            styles.desc,
            {
              marginVertical: marginVerticalDes ? null : 8,
              width: widthDesText ? widthDesText : null,
              textAlign: textAlignDes ? textAlignDes : null,
              fontSize: fontSizeDesc ? fontSizeDesc * fontRef : 12 * fontRef,
              color: colorDesc ? colorDesc : fontColorDark,
              fontWeight: fontWeightDes ? fontWeightDes : null,
            },
          ]}>
          {Description}
        </Text>
      ) : null}
    </View>
  );
};

export default TextHeader;

const styles = StyleSheet.create({
  container: {
    height: 40 * heightRef,
    // marginVertical: 5,
  },
  header: {},
  desc: {
    // marginVertical: 8,
  },
});
