/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text as RNText, TextProps, TouchableOpacity} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';

const Text = ({
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
  marginbtm,
  padding,
  textAlign,
  paddingRight,
  marginLeft,
  textAlignVertical = 'center',
  onPress,
  paddingLeft,
  marginVertical,
  marginHorizontal,
  ...rest
}: TextProps) => {
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <RNText
        style={[
          {
            marginLeft: marginLeft ? marginLeft * widthRef : null,
            padding: padding,
            marginBottom: marginbtm,
            marginTop: marginTop,
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
            marginVertical,
            marginHorizontal,
          },
          width !== undefined ? {width} : {},
          style,
        ]}
        {...rest}>
        {children}
      </RNText>
    </TouchableOpacity>
  );
};

export default Text;
