import React from 'react';
import {Image, ScrollView} from 'react-native';
import {
  BgColor,
  BorderColor,
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
  pureWhiteColor,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import AddressProgressBar from 'src/Components/AddressProgressBar';
import {CustomButton} from 'src/Components/CustomButton';
import OnxHeader from 'src/Components/Header';
import MultiColorText from 'src/Components/HighlightedColorText';
import OnxIcon from 'src/Components/OnxIcons';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextFeild from 'src/Components/TextFeild';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
const AddAdressScreen3 = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.root}>
        <View style={{width: '100%'}}>
          <OnxHeader
            left={
              <View style={styles.header}>
                <OnxIcon
                  onPress={() => {
                    navigation.navigate('Home');
                  }}
                  colorIcon={fontColorLight}
                  name={'arrow-left'}
                  type={'MaterialCommunityIcons'}
                />
                <Text paddingLeft={15} color={fontColorLight}>
                  Add Address
                </Text>
              </View>
            }
          />
          <View style={styles.mainContainr}>
            <AddressProgressBar
              number={1}
              // completed={true}
              completed={true}
              labelText={'Address'}
              isNextLineActive={true}
            />
            <AddressProgressBar
              number={2}
              completed={true}
              labelText={'Order Summary'}
              isNextLineActive={true}
            />
            <AddressProgressBar
              number={3}
              completed={true}
              labelText={'Finish'}
            />
          </View>
          <Separator width={'100%'} />
          <View style={styles.upperCon}>
            <View style={styles.imageStyle}>
              <OnxIcon
                onPress={() => setShowModal(false)}
                size={50}
                colorIcon={pureWhiteColor}
                type={'AntDesign'}
                name={'check'}
              />
            </View>
            <Text paddingVertical={20} color={fontColorLight}>
              Order Successful
            </Text>
            <View
              style={{
                backgroundColor: textBackColor,
                padding: 15,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 13 * heightRef,
              }}>
              <MultiColorText
                color={fontColorLight}
                highlightedColor={sliderColorOrange}
                highlightedText={'$245'}
                textArray={
                  ' You will receive the scrach card soon to your delivery address, pay $245 and recieve at your door'
                }
              />
            </View>
          </View>
          <View style={styles.bottomCon}>
            <CustomButton
              backColor={OnxGreen}
              btnRadius={5}
              textSize={16}
              onPress={() =>
                navigation.navigate('BottomNavigation', {
                  screen: 'HomeScreen',
                })
              }
              btnWidth={'95%'}
              btnHeight={43 * heightRef}
              text={'Go to Home'}
              fontWeight={'bold'}
              marginT={15 * heightRef}
              // paddingVertical={10}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddAdressScreen3;
