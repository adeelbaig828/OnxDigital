import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {
  fontColorLight,
  OnxGreen,
  pureWhiteColor,
  sliderBAckColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomCard} from 'src/Components/customCard';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import style from './style';

const coinsData = [
  {
    text: 'Available Gold Coins',
    image: require('src/assets/coin.png'),
    coins: '20',
  },
  {
    text: 'Available Silver Coins',
    image: require('src/assets/Group.png'),
    coins: '20,000',
  },
];
const CoinsPageScreen = ({navigation}) => {
  const nav = useNavigation();
  const CoinDeals = [
    {
      goldCoins: '10',
      papular: 'Papular',
      price: '260',
      disc: '60',
    },
    {
      goldCoins: '50',
      papular: 'Papular',
      price: '2260',
      disc: '80',
    },
    {
      goldCoins: '100',
      papular: 'Papular',
      price: '4260',
      disc: '60',
    },
  ];
  return (
    <View style={style.mainContainer}>
      <OnxHeader
        left={
          <View style={style.header}>
            <OnxIcon
              onPress={() => {
                nav.goBack();
              }}
              colorIcon={fontColorLight}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            <Text bold={'600'} paddingLeft={16} color={fontColorLight}>
              Coins Details
            </Text>
          </View>
        }
      />
      <View style={style.root}>
        <View style={style.outerCard}>
          {coinsData.map((data, index) => (
            <CustomCard
              btnRadius={5}
              marginHorizontal={10}
              onPress={() =>
                index == 1
                  ? navigation.navigate('CoinsConvertScreen', {
                      from: 'coinspage',
                    })
                  : navigation.navigate('CoinHistoryScreens', {
                      from: 'coinspage',
                    })
              }
              btnHeight={140 * heightRef}
              btnWidth={159 * widthRef}
              style={{borderWidth: 0.2}}
              borderColor={fontColorLight}>
              <>
                <View style={style.innerCard}>
                  <View style={style.imageView}>
                    <Image style={style.image} source={data.image} />
                    <Text fontSize={12} color={fontColorLight}>
                      {data.text}
                    </Text>
                  </View>
                  <View style={style.coinView}>
                    <Text color={'white'}>{data.coins}</Text>
                    <OnxIcon
                      position={'absolute'}
                      right={0 * widthRef}
                      colorIcon={OnxGreen}
                      size={20}
                      type={'AntDesign'}
                      name={'rightcircleo'}
                    />
                  </View>
                </View>
              </>
            </CustomCard>
          ))}
        </View>
        <View style={style.seperator} />
        <CustomCard
          backColor={textBackColor}
          btnWidth={'100%'}
          btnHeight={88 * heightRef}
          paddingVertical={0}>
          <>
            <View style={style.scndCont}>
              <View style={style.leftBox}>
                <View style={style.headerMain}>
                  <TextHeader
                    fontWeight={'600'}
                    fontSizeHeader={14}
                    Header={'Convert to Gold Coins'}
                    Description={'Lorem ipsum dolor st, consecte aee si'}
                  />
                </View>
                <View style={style.now}>
                  <Text
                    onPress={() => {
                      navigation.navigate('CoinsConvertScreen', {
                        from: 'coinspage',
                      });
                    }}
                    paddingRight={5}
                    color={OnxGreen}
                    fontSize={10}>
                    Trade Now
                  </Text>
                  <OnxIcon
                    colorIcon={OnxGreen}
                    size={15}
                    type={'AntDesign'}
                    name={'rightcircle'}
                  />
                </View>
              </View>
              <View style={style.rightBox}>
                <Image source={require('src/assets/cardPic.png')} />
              </View>
              <View></View>
            </View>
          </>
        </CustomCard>
        <View style={style.headerCoins}>
          <TextHeader
            fontWeight={'600'}
            marginTop={15}
            Header={'Buy Gold Coins!'}
          />
        </View>
        {CoinDeals.map(data => (
          <CustomCard
            marginV={10}
            backColor={textBackColor}
            btnRadius={5}
            btnWidth={'100%'}
            btnHeight={64 * heightRef}>
            <>
              <View style={style.scndCont}>
                <View style={style.months}>
                  <Text color={fontColorLight}>
                    {data.goldCoins} Gold Coins
                  </Text>
                  {data.goldCoins === '50' ? (
                    <View
                      style={[
                        style.popularbtn,
                        {
                          backgroundColor:
                            data.goldCoins === '50'
                              ? sliderBAckColorOrange
                              : null,
                        },
                      ]}>
                      <Text
                        fontSize={9}
                        textAlign={'center'}
                        color={pureWhiteColor}>
                        {data.goldCoins === '50' ? data.papular : null}
                      </Text>
                    </View>
                  ) : null}
                </View>
                <View style={style.rightCont}>
                  <View style={style.rightSide}>
                    <Text
                      fontSize={14}
                      color={fontColorLight}
                      style={{marginBottom: 7}}>
                      ${data.price}
                    </Text>
                    <Text fontSize={12} color={sliderBAckColorOrange}>
                      {data.disc}% OFF
                    </Text>
                  </View>
                  <OnxIcon
                    size={18 * heightRef}
                    colorIcon={fontColorLight}
                    type={'Feather'}
                    name={'chevron-right'}
                  />
                </View>
              </View>
            </>
          </CustomCard>
        ))}
      </View>
    </View>
  );
};

export default CoinsPageScreen;
