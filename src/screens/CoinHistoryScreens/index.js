import React from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import {
  fontColorDark,
  fontColorGray,
  fontColorLight,
  OnxGreen,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from 'src/config/screenSize';
import {historyData} from 'src/utils/JSON';
import styles from './style';
const CoinHistoryScreens = ({navigation}) => {
  const renderItem = item => (
    <CustomCard
      marginV={6}
      paddinginner={-10}
      btnRadius={5}
      onPress={() => console.log(item, 'Pressed')}
      btnHeight={64 * heightRef}>
      <>
        <View style={styles.leftCont}>
          <View style={styles.date}>
            <Text fontWeight={'600'} color={fontColorLight}>
              {item.item.date}
            </Text>
            <Text fontSize={10}>{item.item.months}</Text>
          </View>
          <TextHeader
            fontWeight={'600'}
            fontSizeHeader={14}
            marginTop={6 * heightRef}
            Header={item.item.cashtype}
            Description={item.item.Tid}
          />
        </View>
        <View style={styles.rightCont}>
          <Text color={sliderColorOrange}>{item.item.goldCoins}</Text>
          <Text color={fontColorDark}>{item.item.coinsType}</Text>
        </View>
      </>
    </CustomCard>
  );
  return (
    <View style={styles.mainContainer}>
      <OnxHeader
        left={
          <View style={styles.header}>
            <OnxIcon
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
              colorIcon={fontColorLight}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            <Text bold={'600'} paddingLeft={16} color={fontColorLight}>
              Coins History
            </Text>
          </View>
        }
      />
      <View style={styles.root}>
        <CustomCard
          marginV={7}
          backColor={textBackColor}
          btnRadius={3}
          btnWidth={'100%'}
          btnHeight={176 * heightRef}>
          <>
            <View style={styles.scndCont}>
              <View style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={require('src/assets/coin.png')}
                />
                <Text style={styles.goldCoin}>20</Text>
              </View>
              <Text color={fontColorGray} fontSize={12} fontWeight={'400'}>
                Avialable Gold Coins
              </Text>
              <CustomButton
                backColor={OnxGreen}
                btnRadius={5}
                textSize={16}
                // onPress={() => {
                //   navigation.navigate('RedeemScreen');
                // }}
                btnWidth={136 * widthRef}
                btnHeight={40 * heightRef}
                text={'Buy Gold Coins'}
                fontWeight={'600'}
                paddingVertical={10}
              />
            </View>
          </>
        </CustomCard>
        <TextHeader
          fontWeight={'600'}
          marginTop={16 * heightRef}
          Header={'History'}
          Description={'All the golden coins history avialbale here'}
        />
        <FlatList
          data={historyData}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default CoinHistoryScreens;
