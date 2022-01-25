import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {OnxGreen, pureWhiteColor} from 'src/assets/Colors/colors';
import OnxLoading from '../OnxLoading';
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
  disabled,
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
      disabled={disabled}
      onPress={onPress}>
      {disabled ? (
        <OnxLoading Button BackGroundColor={'transparent'} />
      ) : (
        <Text
          style={{
            color: textColor,
            fontSize: textSize,
            fontWeight: fontWeight,
          }}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}
