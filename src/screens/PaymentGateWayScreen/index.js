import React, {useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  fontColorDark,
  fontColorLight,
  OnxGreen,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
const PaymentGatewayScreen = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState(null);
  const inset = useSafeAreaInsets();
  const paymentsMethods = [
    {
      Methods: 'Net Banking',
    },
    {
      Methods: 'Credit/Debit Card',
    },
    {
      Methods: 'Easy Paisa',
    },
    {
      Methods: 'Jazz Cash',
    },
    {
      Methods: 'UPI',
    },
  ];
  return (
    <View style={styles.root}>
      <View style={{width: '100%'}}>
        <OnxHeader
          left={
            <View style={styles.header}>
              <OnxIcon
                onPress={() => {
                  navigation.navigate('PlusPageScreen');
                }}
                colorIcon={fontColorLight}
                name={'arrow-left'}
                type={'MaterialCommunityIcons'}
              />
              <Text paddingLeft={15} color={fontColorLight}>
                Payment Method
              </Text>
            </View>
          }
        />
        <View style={styles.mainContainr}>
          {paymentsMethods.map((data, index) => (
            <CustomCard
              onPress={() => setSelectIndex(index)}
              marginV={5}
              btnWidth={'100%'}
              btnHeight={
                index === selectIndex ? 89 * heightRef : 49 * heightRef
              }
              paddingVertical={10}
              paddingHorizontalInner={-9}
              style={{borderBottomWidth: 0.2}}
              borderColor={fontColorLight}>
              <>
                <View style={styles.innerCard}>
                  <TextIcon
                    onPress={() => setSelectIndex(index)}
                    color={index === selectIndex ? OnxGreen : fontColorLight}
                    type={'MaterialCommunityIcons'}
                    name={
                      index === selectIndex
                        ? 'radiobox-marked'
                        : 'radiobox-blank'
                    }
                    iconcolor={
                      index === selectIndex ? OnxGreen : fontColorLight
                    }
                    fontSize={12}>
                    {data.Methods}
                  </TextIcon>
                  {index === selectIndex ? (
                    <Text
                      marginLeft={49}
                      paddingVertical={5}
                      padding={10}
                      fontSize={12}
                      color={fontColorDark}
                      backColor={textBackColor}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  ) : null}
                </View>
              </>
            </CustomCard>
          ))}
        </View>
      </View>
      <CustomCard
        backColor={textBackColor}
        btnWidth={'100%'}
        btnHeight={45 * heightRef + inset.bottom}
        paddingVertical={10}>
        <>
          <View
            style={{
              height: '100%',
              width: '100%',
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  onPress={() => {
                    navigation.navigate('AddAdressScreen');
                  }}
                  color={OnxGreen}
                  fontSize={14}>
                  $270{' '}
                  <Text textDecorationLine={'line-through'} fontSize={13}>
                    $5000
                  </Text>
                </Text>
              </View>
              <Text fontSize={12}>Amount to pay</Text>
            </View>
            <View>
              <CustomButton
                onPress={() => {
                  navigation.navigate('AddAdressScreen');
                }}
                textColor={'#fff'}
                textSize={14}
                backColor={OnxGreen}
                text={'Continue'}
                btnRadius={5}
                btnWidth={120 * widthRef}
                btnHeight={35 * heightRef}
              />
            </View>
          </View>
        </>
      </CustomCard>
    </View>
  );
};

export default PaymentGatewayScreen;
