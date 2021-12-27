/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text as RNText, TextProps, TouchableOpacity} from 'react-native';
import {fontColorLight, textBackColor} from 'src/assets/Colors/colors';
import globalStyles from 'src/config/globalStyles';
import {fontRef, fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from 'src/Components/CustomText/style';
import View from '../View';

const CustomText = ({
  color = 'grey',
  fontSize = 14,
  bold,
  backColor,
  width,
  borderRadius,
  children,
  textDecorationLine,
  paddingVertical = 0,
  style,
  marginTop,
  ViewMarginTop,
  marginbtm,
  padding,
  textAlign,
  paddingRight,
  marginLeft,
  textAlignVertical = 'center',
  onPress,
  paddingLeft,
  numbering,
  ViewMarginVertical,
  ...rest
}: TextProps) => {
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          width: fullWidth,
          marginVertical: ViewMarginVertical ? ViewMarginVertical : null,
          marginTop: ViewMarginTop ? ViewMarginTop : null,
        }}>
        <View style={styles.numberBoxStyle}>
          <RNText
            style={{
              color: fontColorLight,
            }}>
            {numbering}
          </RNText>
        </View>
        <RNText
          style={[
            {
              marginLeft: marginLeft ? marginLeft * widthRef : null,
              padding: padding,
              marginBottom: marginbtm,
              marginTop: marginTop ? marginTop : 2,
              borderRadius: borderRadius,
              textAlign: textAlign ? textAlign : null,
              backgroundColor: backColor ? backColor : null,
              paddingRight: paddingRight ? paddingRight : null,
              textDecorationLine: textDecorationLine,
              paddingLeft: paddingLeft ? paddingLeft * heightRef : null,
              color,
              fontWeight: bold !== undefined ? bold : 'normal',
              fontSize: fontSize * fontRef,
              paddingVertical: paddingVertical * heightRef,
              textAlignVertical,
            },
            width !== undefined ? {width} : {},
            style,
          ]}
          {...rest}>
          {children}
        </RNText>
      </View>
    </TouchableOpacity>
  );
};

export default CustomText;
