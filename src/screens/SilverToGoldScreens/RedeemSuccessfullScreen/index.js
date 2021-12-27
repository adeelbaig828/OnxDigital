import React from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import {
  fontColorDark,
  fontColorLight,
  normalSizeFont,
  OnxGreen,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import MultiColorText from 'src/Components/HighlightedColorText';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import style from './style';
const SilverToGoldSuccessfull = (props, {navigation}) => {
  console.log('object', props.route.params.from);
  const Golds = props.route.params.gold;
  const Silvers = props.route.params.silver;
  const ads = props.route.params.ads;
  return (
    <View style={style.rootContainer}>
      <View style={style.upperCon}>
        <Image
          resizeMode={'contain'}
          style={style.imageStyle}
          source={require('../../../assets/successImage.png')}
        />
        <Text
          fontSize={16}
          bold={'600'}
          paddingVertical={20}
          color={fontColorLight}>
          Trading Successful
        </Text>
        <View
          style={{
            backgroundColor: textBackColor,
            padding: 15,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MultiColorText
            textAlign={'center'}
            color={fontColorLight}
            highlightedColor={sliderColorOrange}
            highlightedText={`${Golds} Gold`}
            textArray={`You have successfully traded${Golds} Gold coins for ${Silvers} Silver Coins`}
          />
        </View>

        {/* <Text
          paddingVertical={13}
          padding={30}
          textAlign={'center'}
          fontSize={12}
          color={fontColorDark}
          backColor={textBackColor}>
          You have successfully traded {Golds} Gold coins for {Silvers} Silver
          coins
        </Text> */}
      </View>
      {ads == 'null' ? null : (
        <ImageBackground
          style={style.adsBack}
          source={require('../../../assets/newback.png')}
          resizeMode="cover">
          <Text color={fontColorDark} fontSize={11} style={style.headercolor}>
            Did you know?
          </Text>
          <Text
            color={fontColorLight}
            fontSize={16}
            style={{fontWeight: '600'}}>
            Earn more silver coins with this way (Ad-ward)
          </Text>
        </ImageBackground>
      )}

      <View style={style.bottomCon}>
        <CustomButton
          backColor={OnxGreen}
          btnRadius={5}
          textSize={16}
          btnWidth={'100%'}
          btnHeight={43 * heightRef}
          // onPress={() => {
          //   props.navigation.navigate('CoinHistoryScreens');
          // }}
          text={'Play Tournaments'}
          fontWeight={'600'}
          marginT={15 * heightRef}
          paddingVertical={10}
        />
        <CustomButton
          btnRadius={5}
          textColor={fontColorDark}
          textSize={16}
          btnWidth={'100%'}
          onPress={() => {
            props.navigation.navigate('Home');
          }}
          btnHeight={43 * heightRef}
          borderWidth={0.2}
          text={'Go Home'}
          fontWeight={'bold'}
          paddingVertical={10}
          borderColor={fontColorDark}
        />
      </View>
    </View>
  );
};

export default SilverToGoldSuccessfull;
