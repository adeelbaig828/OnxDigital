/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  FlatListProps,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  BorderColor,
  fontColorDark,
  fontColorGray,
  fontColorLight,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {fontRef, fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import {CustomButton} from '../CustomButton';
import Text from '../Text';
import styles from './styles';
let MARGINRIGHT = 25 * widthRef;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const DOTS=({TotalWidth,translateX,i})=>{
  const style= useAnimatedStyle(() => ({
    width:15,
    transform:[{scaleX:interpolate(
      translateX.value,
      [
        TotalWidth * i - TotalWidth,
        TotalWidth * i - TotalWidth / 2,
        TotalWidth * i,
        TotalWidth * i + TotalWidth / 2,
        TotalWidth * i + TotalWidth,
      ],
      // [15, 1.5 * 15, 2 * 15, 1.5 * 1.5, 15],
      [1, 1.2  , 1.5  , 1.2 , 1],
      Extrapolate.CLAMP,
    )}],
   
    backgroundColor: interpolateColor(
      translateX.value,
      [
        TotalWidth * i - TotalWidth,
        TotalWidth * i,
        TotalWidth * i + TotalWidth,
      ],
      [BorderColor, OnxGreen, BorderColor],
    ),
  }),[])
  return (
    <Animated.View
      style={[
        {
          height: 3 * heightRef,
          width: 14 * widthRef,
          borderRadius: 10,
          margin: 5,
        },style
       ,
      ]}
    />
  )
}
export default function FlatListComponent({
  data = [],
  style,
  TextColor,
  contentContainerStyle,
  componentWidth,
  componentHeight,
  imageSource,
  title,
  marginR,
  dots,
  description,
  fontSize,
  contentTitle,
  contentDescription,
  TextColorDesc,
  fontSizedis,
  configs = {title: {}},
  type = '2',
  Button,
  ButtonText,
  ButtonOnPress,
  renderItem,
  ...rest
}: FlatListProps) {
  const [update, setUpdate] = useState(false);
  const config = {
    1: {
      justifyContent: 'flex-start',
      title: {fontWeight: '300', fontSize: 12, ...configs.title},
      des: {fontWeight: 'bold', fontSize: 16},
      container: {
        height: componentHeight || 132 * heightRef,
        width: componentWidth || Button ? 308 * widthRef : 328 * widthRef,
      },
    },
    2: {
      justifyContent: 'flex-end',
      title: {
        fontWeight: 'normal',
        fontSize: fontSize ? fontSize : 16,
        ...configs.title,
      },
      des: {fontWeight: 'normal', fontSize: fontSizedis ? fontSizedis : 12},
      container: {
        height: componentHeight || 228 * heightRef,
        width: componentWidth || 272 * widthRef,
      },
    },
    3: {
      container: {
        height: componentHeight || 80 * heightRef,
        width: componentWidth || 280 * widthRef,
      },
    },
  }[`${type}`];
  let marginRight = marginR || MARGINRIGHT;
  let TotalWidth = config.container.width + marginRight;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const translateX = useSharedValue(0);
  useEffect(() => {
    translateX.value = withTiming(0);
  }, []);
  return (
    <View style={{width: '100%'}}>
      {title && (
        <View style={{paddingHorizontal: 10}}>
          <Text fontSize={16} paddingVertical={10} bold>
            {title}
          </Text>
        </View>
      )}
      {description && (
        <View style={{paddingHorizontal: 10, paddingBottom: 10}}>
          <Text fontSize={12}>{description}</Text>
        </View>
      )}
      <AnimatedFlatList
        data={data}
        style={[{flexGrow: 0, paddingVertical: 10}, style]}
        horizontal={true}
        snapToInterval={config.container.width + marginRight}
        decelerationRate={0.9}
        onScroll={e => {
          let scrolledContent = e.nativeEvent.contentOffset.x;
          translateX.value = scrolledContent;
        }}
        onContentSizeChange={(w, h) => console.log({w, h})}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[{flexGrow: 1}, contentContainerStyle]}
        {...rest}
        renderItem={({item, index}) => {
          if (renderItem) {
            return renderItem({
              item,
              index,
              container: {...config.container, marginRight},
            });
          }
          return (
            <TouchableOpacity onPress={() => console.log('object Pressed')}>
              <TouchableOpacity
                style={[
                  {
                    width: config.container.width,
                    height: config.container.height,
                    marginRight,
                  },
                  styles.itemContainer,
                ]}>
                <ImageBackground
                  style={{
                    overflow: 'hidden',
                    borderRadius: 10,
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: config.justifyContent,
                    padding: 20,
                  }}
                  source={{uri:item.image_url} || require('./newbottomback.png')}
                  resizeMode="cover">
                  <Text
                    color={TextColor}
                    fontSize={config.title.fontSize}
                    style={{
                      fontWeight: config.title.fontWeight,
                      marginBottom: 5 * heightRef,
                    }}>
                    {item.name ?? contentTitle}
                  </Text>
                  <Text
                    color={TextColorDesc}
                    fontSize={config.des.fontSize}
                    style={{fontWeight: config.des.fontWeight}}>
                    {contentDescription}
                  </Text>
                  {Button && (
                    <CustomButton
                      onPress={ButtonOnPress}
                      backColor={OnxGreen}
                      btnRadius={5}
                      textSize={16}
                      btnWidth={112 * widthRef}
                      marginT={15 * heightRef}
                      btnHeight={32 * heightRef}
                      text={ButtonText}
                      fontWeight={'600'}
                      paddingVertical={10}
                    />
                  )}
                </ImageBackground>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
      {dots ? null : (
        <View
          style={{
            width: '100%',
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {(data || []).map((v, i) => <DOTS {...{i,TotalWidth,translateX}}  />)}
        </View>
      )}
    </View>
  );
}
