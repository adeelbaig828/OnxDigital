import React, {useState} from 'react';
import {Image, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
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
import View from 'src/Components/View';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
const AddAdressScreen2 = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('last week');
  const [items, setItems] = useState([
    {label: 'Last Week', value: 'Last Week'},
    {label: 'Last Month', value: 'Last Month'},
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
                Header={'Jhon'}
                Description={'Address Sentence'}
              />
              <Text fontSize={12} color={fontColorDark}>
                Address sentence and all
              </Text>
              <Text
                marginTop={7 * heightRef}
                fontSize={12}
                color={fontColorDark}>
                Phone Number
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
                    Header={'10 Gold Coins'}
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
                        $260
                      </Text>
                      <Text
                        fontSize={12}
                        marginTop={15}
                        paddingRight={10}
                        textDecorationLine={'line-through'}>
                        $5000
                      </Text>
                      <Text
                        fontSize={12}
                        marginTop={15}
                        color={sliderColorOrange}>
                        Save 60%
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    width: '50%',
                    height: 90 * heightRef,
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                  }}>
                  <Image source={require('src/assets/cardPic.png')} />
                  <View>
                    <DropDownPicker
                      placeholder="Qty:1"
                      placeholderStyle={{}}
                      arrowIconStyle={{
                        tintColor: fontColorLight,
                      }}
                      labelStyle={{
                        fontWeight: 'bold',
                        color: fontColorLight,
                      }}
                      textStyle={{
                        fontSize: 12 * heightRef,
                        color: fontColorLight,
                      }}
                      style={{
                        borderRadius: 2,
                        borderColor: BorderColor,
                        backgroundColor: 'transparent',
                        alignSelf: 'flex-end',
                        width: '60%',
                      }}
                      dropDownContainerStyle={{
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                      }}
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
              {/* <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  fontSize={16}
                  paddingVertical={10}
                  paddingRight={10}
                  color={fontColorLight}
                  bold={'600'}>
                  $260
                </Text>
                <Text
                  fontSize={12}
                  marginTop={15}
                  paddingRight={10}
                  textDecorationLine={'line-through'}>
                  $5000
                </Text>
                <Text fontSize={12} marginTop={15} color={sliderColorOrange}>
                  Save 60%
                </Text>
              </View> */}
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
                  $260
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: textBackColor,
          height: 60 * heightRef,
        }}>
        <View
          style={{
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text paddingLeft={10} fontSize={14} color={OnxGreen} bold={'600'}>
              $270
            </Text>
            <Text
              fontSize={12}
              paddingLeft={10}
              textDecorationLine={'line-through'}
              bold={'400'}>
              $5000
            </Text>
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