import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  BgColor,
  BorderColor,
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
  textBackColor,
} from 'src/assets/Colors/colors';
import AddressProgressBar from 'src/Components/AddressProgressBar';
import {CustomButton} from 'src/Components/CustomButton';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import OnxLoading from 'src/Components/OnxLoading';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextFeild from 'src/Components/TextFeild';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
import Toast from 'react-native-toast-message';
import {ADD_USER_ADDRESS} from 'src/Redux/Reducers/Payments/PaymentActions';
import {useDispatch, useSelector} from 'react-redux';
import {print, Validations} from 'src/config/function';

const AddAdressScreen = ({navigation}) => {
  const barearToken = useSelector(state => state.auth.token);
  const Profile = useSelector(state => state.muqablas.studentProfile);
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [userState, setUserState] = useState('');
  const [City, setCity] = useState('');
  const [Address, setAddress] = useState('');
  const [Country, setCountry] = useState('');
  const selectedData = useSelector(state => state.payment.submitUsersData);
  const [loading, setloading] = useState(false);
  const showToast = ({type, text1, text2}) => {
    Toast.show({
      position: 'bottom',
      type,
      text1,
      text2,
    });
  };
  const dispatch = useDispatch();

  const inputFieldsValidation = () => {
    if (!firstName) {
      var invalidName = 'Please enter your first name';
      console.log(invalidName);
      showToast({
        type: 'error',
        text1: 'Invalid First Name',
        text2: invalidName,
      });
      return false;
    }
    if (!lastName) {
      var invalidName = 'Please enter your last name';
      console.log('Please enter your last name');
      showToast({
        type: 'error',
        text1: 'Please enter your last name',
        text2: invalidName,
      });
      return false;
    }
    if (!mobileNo) {
      var invalidReason = 'Please enter your mobileNo';
      console.log(invalidReason);
      showToast({
        type: 'error',
        text1: 'Invalid mobileNo',
        text2: invalidReason,
      });
      return false;
    }
    let error = Validations['Phone']?.(mobileNo) || false;
    console.log('object', error);
    if (!error) {
      console.log('Please enter your mobileNo');
      showToast({
        type: 'error',
        text1: 'Invalid Number',
        text2: 'Please enter your mobileNo',
      });
      return false;
    }
    if (!pinCode) {
      var invalidsetMoreInfo = 'Please enter your pinCode';
      console.log(invalidsetMoreInfo);
      showToast({
        type: 'error',
        text1: 'Invalid pinCode',
        text2: invalidsetMoreInfo,
      });
      return false;
    }
    if (!userState) {
      var invalidsetMoreInfo = 'Please enter your State';
      console.log(invalidsetMoreInfo);
      showToast({
        type: 'error',
        text1: 'Invalid State',
        text2: invalidsetMoreInfo,
      });
      return false;
    }
    if (!Country) {
      var invalidsetMoreInfo = 'Please enter your Country';
      console.log(invalidsetMoreInfo);
      showToast({
        type: 'error',
        text1: 'Invalid Country',
        text2: invalidsetMoreInfo,
      });
      return false;
    }
    if (!City) {
      var invalidsetMoreInfo = 'Please enter your City';
      console.log(invalidsetMoreInfo);
      showToast({
        type: 'error',
        text1: 'Invalid City',
        text2: invalidsetMoreInfo,
      });
      return false;
    }
    if (!Address) {
      var invalidsetMoreInfo = 'Please enter your Address';
      console.log(invalidsetMoreInfo);
      showToast({
        type: 'error',
        text1: 'Invalid Address',
        text2: invalidsetMoreInfo,
      });
      return false;
    }
    return true;
  };
  const handleChangeGrade = () => {
    setloading(true);
    if (!inputFieldsValidation()) {
      setloading(false);
      return;
    }
    const _gradeData = {
      type: 'shipping',
      is_default: 1,
      first_name: firstName,
      last_name: lastName,
      zip_code: pinCode,
      email: Profile?.data?.email,
      phone: mobileNo,
      address_1: Address,
      state: userState,
      city: City,
      country: Country,
    };
    setloading(false);

    ADD_USER_ADDRESS(
      _gradeData,
      barearToken,
    )(dispatch)
      .then(res => {
        console.log('ADD_USER_ADDRESS', res);
        if (res.code === 200) {
          showToast({
            type: 'success',
            text1: 'Success',
            text2: res.message,
          });
          setloading(false);
          navigation.replace('AddAdressScreen2');
        } else {
          console.log('else then res', res);
          showToast({
            type: 'error',
            text1: 'Error',
            text2: res.message,
          });
          setloading(false);
        }
      })
      .catch(err => {
        console.log('catch err', err);
        showToast({
          type: 'error',
          text1: 'error',
          text2: 'error',
        });
      });
  };
  return loading ? (
    <OnxLoading />
  ) : (
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
              <Text
                fontSize={15}
                marginLeft={5 * widthRef}
                bold={'300'}
                color={fontColorLight}>
                Deliver to
              </Text>
              <TextFeild
                value={firstName}
                onChangeText={text => setfirstName(text)}
                title={'First Name*'}
                titleColor={fontColorLight}
                titleSize={mediumSizeFont}
                borderColor={BorderColor}
                placeholder={'Enter your first name'}
                placeholderColor={BorderColor}
                maxLengthValidation={1000}
                showPassword={false}
                fontWeight={'300'}
              />
              <TextFeild
                value={lastName}
                onChangeText={text => setlastName(text)}
                title={'Last Name*'}
                borderColor={BorderColor}
                titleColor={fontColorLight}
                titleSize={mediumSizeFont}
                placeholder={'Enter your last name'}
                placeholderColor={BorderColor}
                maxLengthValidation={1000}
                fontWeight={'300'}
                showPassword={false}
              />
              <TextFeild
                onChangeText={text => setMobileNo(text)}
                title={'Mobile number*'}
                titleColor={fontColorLight}
                titleSize={mediumSizeFont}
                maxLength={11}
                borderColor={BorderColor}
                placeholder={'e.g. +xxxxxxxxxx'}
                placeholderColor={BorderColor}
                maxLengthValidation={1000}
                fontWeight={'300'}
              />
              <View style={styles.gpsView}>
                <TextFeild
                  onChangeText={text => setPinCode(text)}
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
                  onChangeText={text => setUserState(text)}
                  title={'State'}
                  titleColor={fontColorLight}
                  titleSize={mediumSizeFont}
                  placeholder={'e.g. Karachi'}
                  placeholderColor={BorderColor}
                  borderColor={BorderColor}
                  maxLengthValidation={1000}
                  style={styles.halfTextField}
                  fontWeight={'300'}
                />
                <TextFeild
                  onChangeText={text => setCity(text)}
                  title={'City'}
                  titleColor={fontColorLight}
                  titleSize={mediumSizeFont}
                  borderColor={BorderColor}
                  placeholder={'e.g. Karachi'}
                  placeholderColor={BorderColor}
                  maxLengthValidation={1000}
                  style={styles.halfTextField}
                  fontWeight={'300'}
                />
              </View>
              <TextFeild
                onChangeText={text => setCountry(text)}
                title={'Country'}
                titleColor={fontColorLight}
                titleSize={mediumSizeFont}
                placeholder={'e.g. Pakistan'}
                placeholderColor={BorderColor}
                borderColor={BorderColor}
                maxLengthValidation={1000}
                fontWeight={'300'}
              />
              <TextFeild
                onChangeText={text => setAddress(text)}
                title={'House No. and Building'}
                titleColor={fontColorLight}
                titleSize={mediumSizeFont}
                borderColor={BorderColor}
                placeholder={'e.g. s214 heights'}
                placeholderColor={BorderColor}
                maxLengthValidation={1000}
                fontWeight={'300'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.textBack}>
        <CustomButton
          backColor={OnxGreen}
          btnRadius={5}
          textSize={16}
          onPress={() => {
            handleChangeGrade();
            // navigation.navigate('AddAdressScreen2');
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
