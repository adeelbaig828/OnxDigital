import React, {useEffect, useState} from 'react';
import {Image, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector} from 'react-redux';
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
import OnxIcon from 'src/Components/OnxIcons';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextFeild from 'src/Components/TextFeild';
import TextHeader from 'src/Components/TextHeader';
import {useRoute} from '@react-navigation/core';
import View from 'src/Components/View';
import {print} from 'src/config/function';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
const AddAdressScreen2 = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const route = useRoute();
  const [value, setValue] = useState('last week');
  const selectedData = useSelector(state => state.payment.submitUsersData);
  const [items, setItems] = useState([
    {label: '1', value: 'Last Week'},
    {label: '2', value: 'Last Month'},
  ]);
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
                completed={true}
                labelText={'Address'}
                isNextLineActive={true}
              />
              <AddressProgressBar
                number={2}
                labelText={'Order Summary'}
                active={true}
              />
              <AddressProgressBar number={3} next={true} labelText={'Finish'} />
            </View>
            <Separator />
            <View style={{marginHorizontal: 10}}>
              <TextHeader
                fontWeight={'600'}
                marginTop={16 * heightRef}
                Header={`${route?.params?.addresses.first_name} ${route?.params?.addresses.last_name}`}
                Description={`${route?.params?.addresses.address_1}`}
              />
              <Text fontSize={12} color={fontColorDark}>
                {`${route?.params?.addresses.city} ${route?.params?.addresses.state} ${route?.params?.addresses.country}`}
              </Text>
              <Text
                marginTop={7 * heightRef}
                fontSize={12}
                color={fontColorDark}>
                {route?.params?.addresses.phone}
              </Text>
              <CustomButton
                borderColor={OnxGreen}
                borderWidth={1}
                btnRadius={5}
                textSize={16}
                textColor={OnxGreen}
                onPress={() => {
                  navigation.navigate('AddAdressScreen4');
                }}
                btnWidth={333 * widthRef}
                btnHeight={48 * heightRef}
                text={'Change or Add Address'}
                fontWeight={'600'}
                marginT={15 * heightRef}
                paddingVertical={10}
                marginHorizontal={5}
              />
              <Separator />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <TextHeader
                    fontWeight={'600'}
                    fontSizeHeader={14}
                    colorheader={fontColorLight}
                    Header={selectedData.selectedCoins}
                    Description={'Some info about the card'}
                  />
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text
                        fontSize={16}
                        paddingVertical={10}
                        paddingRight={10}
                        color={fontColorLight}
                        bold={'600'}>
                        ${selectedData.prices}
                      </Text>
                      {/* <Text
                        fontSize={12}
                        marginTop={15}
                        paddingRight={10}
                        textDecorationLine={'line-through'}>
                        $5000
                      </Text> */}
                      <Text
                        fontSize={12}
                        marginTop={15}
                        color={sliderColorOrange}>
                        Save 60%
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.dropdownmain}>
                  <Image source={require('src/assets/cardPic.png')} />
                  <View>
                    <DropDownPicker
                      placeholder="Qty:1"
                      placeholderStyle={{}}
                      arrowIconStyle={{
                        tintColor: fontColorLight,
                      }}
                      labelStyle={styles.dropdown3}
                      textStyle={{
                        fontSize: 12 * heightRef,
                        color: fontColorLight,
                      }}
                      style={styles.dropdown1}
                      dropDownContainerStyle={styles.dropdown2}
                      labelProps={'Last Week'}
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text fontSize={12} marginTop={5} color={fontColorLight}>
                  Delivery by Fri May 21st{' '}
                </Text>
                <Text fontSize={12} marginTop={5}>
                  | $20
                </Text>
              </View>
              <Separator />
              <Text
                fontSize={14}
                marginTop={5}
                color={fontColorLight}
                bold={'600'}>
                Price Details
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text fontSize={12} color={fontColorLight} bold={'400'}>
                  Price (1 item)
                </Text>
                <Text fontSize={12} color={fontColorLight} bold={'400'}>
                  ${selectedData.prices}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text fontSize={12} color={fontColorLight} bold={'400'}>
                  Discount
                </Text>
                <Text fontSize={12} color={sliderColorOrange} bold={'400'}>
                  -$60
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.discountouter}>
        <View style={styles.discountinner}>
          <View style={styles.discountinner1}>
            <Text paddingLeft={10} fontSize={14} color={OnxGreen} bold={'600'}>
              ${selectedData.prices}
            </Text>
            {/* <Text
              fontSize={12}
              paddingLeft={10}
              textDecorationLine={'line-through'}
              bold={'400'}>
              $5000
            </Text> */}
          </View>
          <Text fontSize={12} paddingLeft={10} bold={'400'}>
            Amount to pay
          </Text>
        </View>
        <CustomButton
          onPress={() => {
            navigation.navigate('AddAdressScreen3');
          }}
          backColor={OnxGreen}
          btnRadius={5}
          textColor={pureWhiteColor}
          textSize={16}
          btnWidth={130 * widthRef}
          btnHeight={35 * heightRef}
          borderWidth={0.2}
          text={'Continue'}
          fontWeight={'bold'}
          borderColor={fontColorDark}
          margin={8}
        />
      </View>
    </View>
  );
};

export default AddAdressScreen2;
