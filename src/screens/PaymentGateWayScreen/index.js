import React, {useEffect, useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
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
import OnxLoading from 'src/Components/OnxLoading';
import Text from 'src/Components/Text';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {print} from 'src/config/function';
import {heightRef, widthRef} from 'src/config/screenSize';
import {
  GET_PAYMENT_METHODS,
  SUBMIT_USERS_CARD_DATA,
} from 'src/Redux/Reducers/Payments/PaymentActions';
import styles from './style';
const PaymentGatewayScreen = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState(null);
  const inset = useSafeAreaInsets();
  const [loading, setloading] = useState(false);
  const [paymentsMethod, setpaymentsMethod] = useState([]);
  useEffect(() => {
    setloading(true);
    getAllPaymentmethods();
  }, []);
  const dispatch = useDispatch();
  const barearToken = useSelector(state => state.auth.token);
  const selectedData = useSelector(state => state.payment.submitUsersData);
  const getAllPaymentmethods = () => {
    GET_PAYMENT_METHODS(barearToken)(dispatch)
      .then(res => {
        if (res.code === 200) {
          setpaymentsMethod(res.data.data);
          setTimeout(() => {
            setloading(false);
          }, 500);
        } else {
          console.log('then res', res);
        }
      })
      .catch(err => {
        console.log('catch err', err);
      });
  };
  const submitCoinsDetail = name => {
    try {
      const _UsersData = {
        paymentMethod: name,
        ...selectedData,
      };
      SUBMIT_USERS_CARD_DATA(_UsersData)(dispatch);
    } catch (error) {
      print('error', error);
    }
  };
  return loading ? (
    <OnxLoading />
  ) : (
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
          {paymentsMethod.map((data, index) => (
            <CustomCard
              onPress={() => (
                setSelectIndex(index), submitCoinsDetail(data.name)
              )}
              marginV={5}
              btnWidth={'100%'}
              btnHeight={
                index === selectIndex ? 139 * heightRef : 49 * heightRef
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
                    {data.name}
                  </TextIcon>
                  {index === selectIndex ? (
                    <Text
                      marginLeft={49}
                      paddingVertical={5}
                      numberOfLines={6}
                      adjustsFontSizeToFit
                      fontSize={12}
                      color={fontColorDark}
                      backColor={textBackColor}>
                      {data.description}
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
          <View style={styles.cardMain}>
            <View>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}>
                <Text
                  onPress={() => {
                    navigation.navigate('AddAdressScreen');
                  }}
                  color={OnxGreen}
                  fontSize={14}>
                  ${selectedData.prices}
                  {/* <Text textDecorationLine={'line-through'} fontSize={13}>
                    $5000
                  </Text> */}
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
