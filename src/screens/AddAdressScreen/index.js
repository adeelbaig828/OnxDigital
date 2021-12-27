import React from 'react';
import {ScrollView} from 'react-native';
import {
  BgColor,
  BorderColor,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
  textBackColor,
} from 'src/assets/Colors/colors';
import AddressProgressBar from 'src/Components/AddressProgressBar';
import {CustomButton} from 'src/Components/CustomButton';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextFeild from 'src/Components/TextFeild';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
const AddAdressScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
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
                active={true}
                labelText={'Address'}
                isNextLineActive={true}
              />
              <AddressProgressBar
                next={true}
                number={2}
                labelText={'Order Summary'}
              />
              <AddressProgressBar number={3} next={true} labelText={'Finish'} />
            </View>
            <Separator />
            <View style={{marginHorizontal: 10}}>
              <TextFeild
                onChangeText={() => {}}
                title={'Deliver to*'}
                titleColor={fontColorLight}
                titleSize={mediumSizeFont}
                borderColor={BorderColor}
                placeholder={'e.g. Arun Kumar'}
                placeholderColor={BorderColor}
                maxLengthValidation={1000}
                fontWeight={'300'}
              />
              <TextFeild
                onChangeText={() => {}}
                title={'Mobile number*'}
                titleColor={fontColorLight}
                titleSize={mediumSizeFont}
                borderColor={BorderColor}
                placeholder={'e.g. +xxxxxxxxxx'}
                placeholderColor={BorderColor}
                maxLengthValidation={1000}
                fontWeight={'300'}
              />
              <View style={styles.gpsView}>
                <TextFeild
                  onChangeText={() => {}}
                  title={'Pincode*'}
                  titleColor={fontColorLight}
                  titleSize={mediumSizeFont}
                  borderColor={BorderColor}
                  placeholder={'e.g. 580014'}
                  placeholderColor={BorderColor}
                  maxLengthValidation={1000}
                  style={styles.halfTextField}
                  fontWeight={'300'}
                />
                <View style={styles.gpsInnerView}>
                  <OnxIcon
                    onPress={() => setShowModal(false)}
                    size={20}
                    colorIcon={BgColor}
                    type={'MaterialCommunityIcons'}
                    name={'crosshairs-gps'}
                  />
                  <Text style={styles.gpsText}>Use my location</Text>
                </View>
              </View>
              <View style={styles.cityView}>
                <TextFeild
                  onChangeText={() => {}}
                  title={'State'}
                  titleColor={fontColorLight}
                  titleSize={mediumSizeFont}
                  placeholder={'e.g. Karachi'}
                  placeholderColor={BorderColor}
                  maxLengthValidation={1000}
                  style={styles.halfTextField}
                  fontWeight={'300'}
                />
                <TextFeild
                  onChangeText={() => {}}
                  title={'City'}
                  titleColor={fontColorLight}
                  titleSize={mediumSizeFont}
                  placeholder={'e.g. Karachi'}
                  placeholderColor={BorderColor}
                  maxLengthValidation={1000}
                  style={styles.halfTextField}
                  fontWeight={'300'}
                />
              </View>
              <TextFeild
                onChangeText={() => {}}
                title={'House No. and Building'}
                titleColor={fontColorLight}
                titleSize={mediumSizeFont}
                placeholder={'e.g. +xxxxxxxxxx'}
                placeholderColor={BorderColor}
                maxLengthValidation={1000}
                fontWeight={'300'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: textBackColor,
          height: 60 * heightRef,
        }}>
        <CustomButton
          backColor={OnxGreen}
          btnRadius={5}
          textSize={16}
          onPress={() => {
            navigation.navigate('AddAdressScreen2');
          }}
          btnWidth={333 * widthRef}
          btnHeight={48 * heightRef}
          text={'Save Address'}
          fontWeight={'600'}
          marginT={15 * heightRef}
          paddingVertical={10}
          marginHorizontal={5}
          marginBottom={20}
        />
      </View>
    </View>
  );
};

export default AddAdressScreen;
