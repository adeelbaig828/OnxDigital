import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {pureWhiteColor} from 'src/assets/Colors/colors';
import {styles} from './style';

export function CustomButton({
  alignItems = 'center',
  justifyContent = 'center',
  text,
  textColor = pureWhiteColor,
  textSize,
  borderColor,
  btnWidth,
  btnHeight,
  btnRadius,
  backColor,
  paddingH,
  padding,
  paddingV,
  marginV,
  marginT,
  fontWeight,
  marginHorizontal,
  borderWidth,
  marginBottom,
  onPress,
  margin,
  alignSelf,
}) {
  return (
    <TouchableOpacity
      style={{
        marginVertical: marginV,
        padding: padding,
        alignItems: alignItems,
        justifyContent: justifyContent,
        backgroundColor: backColor,
        borderColor: borderColor,
        width: btnWidth,
        height: btnHeight,
        borderRadius: btnRadius,
        paddingHorizontal: paddingH,
        borderWidth: borderWidth,
        paddingVertical: paddingV,
        marginTop: marginT,
        marginBottom: marginBottom,
        marginHorizontal: marginHorizontal,
        margin,
        alignSelf: alignSelf ? alignSelf : null,
      }}
      onPress={onPress}>
      <Text
        style={{color: textColor, fontSize: textSize, fontWeight: fontWeight}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
