import * as React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import View from '../View';
import Animated, {Layout} from 'react-native-reanimated';
import {heightRef, widthRef} from 'src/config/screenSize';
export function CustomCard({
  alignItems = 'center',
  justifyContent = 'center',
  borderColor,
  btnWidth,
  btnHeight,
  btnRadius,
  maxHight,
  backColor,
  paddingH,
  padding,
  paddinginner,
  paddingV,
  marginV,
  marginT,
  children,
  paddingHorizontalInner,
  borderBottomColor,
  style,
  marginHorizontal,
  borderWidth,
  onPress,
  ...rest
}: TouchableOpacityProps) {
  return (
    <Animated.View layout={Layout.stiffness()}>
      <TouchableOpacity
        style={[
          {
            maxHeight: maxHight,
            marginVertical: marginV,
            padding: padding,
            alignItems: alignItems,
            justifyContent: justifyContent,
            backgroundColor: backColor,
            borderBottomColor: borderBottomColor,
            borderColor: borderColor,
            width: btnWidth,
            height: btnHeight,
            borderRadius: btnRadius,
            paddingHorizontal: paddingH,
            borderWidth: borderWidth,
            paddingVertical: paddingV,
            marginTop: marginT,
            marginHorizontal: marginHorizontal,
          },
          style,
        ]}
        disabled={!onPress}
        onPress={onPress}
        {...rest}>
        <View
          style={{
            paddingHorizontal: paddingHorizontalInner
              ? paddingHorizontalInner
              : paddinginner
              ? paddinginner
              : 10 * widthRef,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {children}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
