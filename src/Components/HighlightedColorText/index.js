/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text as RNText, TextProps, TouchableOpacity, View} from 'react-native';
import {fontRef, heightRef} from 'src/config/screenSize';
const MultiColorText = ({
  color = 'black',
  fontSize = 14,
  bold,
  width,
  children,
  paddingVertical = 0,
  justifyContent,
  style,
  textAlignVertical = 'center',
  textAlign,
  containerStyle,
  onPress,
  textArray,
  highlightedText = ' ',
  highlightedColor,
  highlightedStyle,
  ...rest
}: TextProps) => {
  if (textArray) {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: justifyContent ? null : 'center',
        }}>
        {textArray.split(highlightedText).map((t, i, a) => (
          <>
            {t.split(' ').map(v => (
              <RNText
                style={[
                  {
                    color,
                    fontWeight: bold !== undefined ? 'bold' : 'normal',
                    fontSize: fontSize * fontRef,
                    paddingVertical: paddingVertical * heightRef,
                    textAlignVertical,
                    textAlign,
                  },
                  width !== undefined ? {width} : {},

                  style,
                ]}
                {...{...rest}}>
                {v}{' '}
              </RNText>
            ))}
            {i !== a.length - 1 && (
              <RNText
                style={[
                  {
                    color: highlightedColor || color,
                    fontWeight: bold !== undefined ? 'bold' : 'normal',
                    fontSize: fontSize * fontRef,
                    paddingVertical: paddingVertical * heightRef,
                    textAlignVertical,
                    textAlign,
                  },
                  width !== undefined ? {width} : {},
                  style,

                  highlightedStyle,
                ]}
                {...{...rest}}>
                {highlightedText}{' '}
              </RNText>
            )}
          </>
        ))}
      </View>
    );
  }
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      style={containerStyle}>
      <RNText
        style={[
          {
            color,
            fontWeight: bold !== undefined ? 'bold' : 'normal',
            fontSize: fontSize * fontRef,
            paddingVertical: paddingVertical * heightRef,
            textAlignVertical,
            textAlign,
          },
          width !== undefined ? {width} : {},

          style,
        ]}
        {...{...rest}}>
        {children}
      </RNText>
    </TouchableOpacity>
  );
};

export default MultiColorText;

{
  /* <Text
fontSize={14}
color="#2A2A2A"
highlightedText="- how it works?"
highlightedColor="red"
highlightedStyle={{ textDecorationLine: "underline" }}
textArray="Enter the amount you would like to pay for this delivery - how it works?"
/> */
}
