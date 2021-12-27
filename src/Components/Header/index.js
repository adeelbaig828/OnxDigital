import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {fontColorDark, fontColorLight} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
const HeaderHeight = 40 * heightRef;

const OnxHeader = ({
  left,
  mid,
  right,
  title,
  borderWidth1,
  marginBottom,
  borderBottomWidth2,
  backgroundColor,
  widthHeader,
  titleColor,
}) => {
  const inset = useSafeAreaInsets();
  return (
    <>
      <View
        style={{
          height: Platform.OS === 'ios' ? inset.top : 0,
          width: '100%',
        }}
      />
      <View
        style={[
          styles.container,
          {
            width: widthHeader ? widthHeader : '100%',
            backgroundColor: backgroundColor ? backgroundColor : null,
            marginBottom: marginBottom ? null : 10 * heightRef,
            borderWidth: borderWidth1 ? null : 0.3,
            borderBottomWidth: borderBottomWidth2 ? null : 0.3,
            borderTopWidth: 0,
          },
        ]}>
        <View style={styles.left}>{left && left}</View>
        <View style={styles.mid}>
          {title !== undefined ? (
            <Text
              style={[
                styles.title,
                {
                  color: titleColor ? titleColor : fontColorLight,
                },
              ]}>
              {title}
            </Text>
          ) : (
            mid && mid
          )}
        </View>
        <View style={styles.right}>{right && right}</View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    minHeight: HeaderHeight,
    borderBottomColor: fontColorDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {position: 'absolute', left: 10 * widthRef},
  right: {position: 'absolute', right: 15 * widthRef},
  mid: {
    flex: 1,
    paddingHorizontal: 20 * widthRef,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18 * heightRef,
    fontWeight: '700',
    // fontSize: 24,
  },
});
export default OnxHeader;
