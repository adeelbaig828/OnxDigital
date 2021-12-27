import React, {useState} from 'react';
import {FlatList, Image, Modal, StyleSheet} from 'react-native';
import {
  BgColor,
  BorderColor,
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
  sliderBackColor,
  sliderBAckColorOrange,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import OnxHeader from 'src/Components/Header';
import MultiColorText from 'src/Components/HighlightedColorText';
import OnxIcon from 'src/Components/OnxIcons';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextFeild from 'src/Components/TextFeild';
import TextHeader from 'src/Components/TextHeader';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';

const CoinsConvertScreen = (props, {navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const convertData = [
    {
      id: 1,
      goldCoins: '5',
      silverCoins: '2000',
    },
    {
      id: 2,
      goldCoins: '15',
      silverCoins: '5000',
    },
  ];

  const renderItem = (item, index) => (
    <CustomCard
      marginV={7}
      backColor={textBackColor}
      btnRadius={5}
      onPress={() => console.log(item, index, setShowModal(true))}
      btnWidth={'100%'}
      btnHeight={64 * heightRef}>
      <>
        <View style={styles.scndCont}>
          <View style={styles.months}>
            <TextHeader
              fontWeight={'600'}
              fontSizeHeader={14}
              marginTop={6 * heightRef}
              Header={`${item.item.goldCoins} Gold Coins`}
              Description={`Trade ${item.item.silverCoins} Silver coins`}
            />
          </View>
          <View style={styles.rightCont}>
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
  );
  return (
    <View style={styles.mainContainer}>
      <OnxHeader
        left={
          <View style={[styles.header, {flexDirection: 'row'}]}>
            <OnxIcon
              onPress={() => {
                props.navigation.navigate('Home');
              }}
              colorIcon={fontColorLight}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            {props?.route?.params?.from == 'coinspage' ||
            props?.route?.params?.from == 'drawer' ? (
              <Text bold={'600'} paddingLeft={16} color={fontColorLight}>
                Silver Coins
              </Text>
            ) : null}
          </View>
        }
      />
      <View style={styles.root}>
        <Modal animationType="slide" transparent={true} visible={showModal}>
          <View style={styles.mainModal}>
            <View style={styles.innerModal}>
              <View style={styles.modalHeader}>
                <View style={styles.coloText}>
                  <Text bold={'600'} color={fontColorLight}>
                    You are about to trade your
                  </Text>
                  <Text bold={'600'} color={sliderColorOrange}>
                    8000 silver coins = 8 gold coins
                  </Text>
                </View>
                <OnxIcon
                  onPress={() => setShowModal(false)}
                  size={29}
                  colorIcon={fontColorLight}
                  type={'AntDesign'}
                  name={'close'}
                />
              </View>

              <Text fontSize={12}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <CustomButton
                backColor={OnxGreen}
                onPress={() => {
                  props.navigation.navigate('SilverToGoldSuccessfull', {
                    from: props?.route?.params?.from,
                    ads: 'null',
                    gold: 8,
                    silver: 8000,
                  });
                  setShowModal(false);
                }}
                btnRadius={5}
                textSize={16}
                btnWidth={'100%'}
                btnHeight={40 * heightRef}
                text={'Trade Now'}
                fontWeight={'600'}
                marginT={15 * heightRef}
                paddingVertical={10}
              />
              <CustomButton
                btnRadius={5}
                textColor={fontColorLight}
                textSize={16}
                btnWidth={'100%'}
                btnHeight={43 * heightRef}
                borderWidth={0.2}
                text={'Cancel'}
                fontWeight={'bold'}
                paddingVertical={10}
                borderColor={fontColorDark}
              />
            </View>
          </View>
        </Modal>
        {props?.route?.params?.from == 'coinspage' ||
        props?.route?.params?.from == 'drawer' ? (
          <CustomCard
            marginV={17}
            backColor={textBackColor}
            btnRadius={5}
            btnWidth={'100%'}
            btnHeight={112 * heightRef}>
            <>
              <View style={styles.scndContainer}>
                <View style={styles.upperSide}>
                  <Image
                    style={styles.image}
                    source={require('src/assets/Group.png')}
                  />
                  <Text style={styles.goldCoin}>20,000</Text>
                </View>
                <View style={styles.downSide}>
                  <Text
                    bold={'400'}
                    marginbtm={5 * heightRef}
                    marginTop={15 * heightRef}
                    fontSize={12}
                    color={fontColorDark}>
                    Available Silver Coins
                  </Text>
                </View>
              </View>
            </>
          </CustomCard>
        ) : null}

        <TextHeader
          fontWeight={'600'}
          marginTop={6 * heightRef}
          Header={'Convert to Gold Coins'}
          Description={'You can trade existing silver coins for gold coins'}
        />
        <Text marginTop={9 * heightRef} bold={'600'} color={fontColorLight}>
          Enter silver coins
        </Text>
        <TextFeild
          onChangeText={() => {}}
          titleSize={mediumSizeFont}
          placeholder={'2000'}
          textAlign="center"
          placeholderColor={fontColorDark}
          maxLengthValidation={1000}
          borderColor={BorderColor}
        />
        <MultiColorText
          color={fontColorLight}
          highlightedColor={sliderColorOrange}
          highlightedText={'5 gold'}
          textArray={'You will get5 goldcoins for this trade'}
        />

        <CustomButton
          backColor={OnxGreen}
          btnRadius={5}
          textSize={16}
          onPress={() => {
            props.navigation.navigate('SilverToGoldSuccessfull', {
              from: props?.route?.params?.from,
              gold: 5,
              silver: 2000,
            });
          }}
          btnWidth={'100%'}
          btnHeight={48 * heightRef}
          text={'Trade'}
          fontWeight={'600'}
          marginT={15 * heightRef}
          paddingVertical={10}
        />
        <Separator />
        <Text
          marginbtm={5 * heightRef}
          marginTop={2 * heightRef}
          bold={'600'}
          color={fontColorLight}>
          Convert more
        </Text>
        <FlatList
          data={convertData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default CoinsConvertScreen;
