import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import MultiColorProgressBar from 'src/Components/ProgressBar';
import TextFeild from 'src/Components/TextFeild';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {fullWidth, heightRef} from 'src/config/screenSize';
import styles from './style';

const OnBoarding_104 = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState(null);
  const [school, setSchool] = useState(null);
  const [Buttonloading, setButtonloading] = useState(false);
  const inset = useSafeAreaInsets();
  const showToast = ({type, text1, text2}) => {
    Toast.show({
      position: 'bottom',
      type,
      text1,
      text2,
    });
  };
  return (
    <>
      <MultiColorProgressBar number={3} />
      <View
        style={[
          styles.container,
          {
            paddingBottom: Platform.OS === 'ios' ? inset.bottom : 0,
          },
        ]}>
        <View style={styles.container2}>
          <TextHeader
            marginTop={15 * heightRef}
            fontSizeHeader={32}
            fontWeight={'500'}
            Header={'Your School'}
            fontSizeDesc={14}
            colorDesc={fontColorLight}
            Description={'Please select which school you are going'}
          />
          <TextFeild
            onChangeText={text => setSchool(text)}
            borderRadius={30}
            password
            paddingLeft
            SearchIcon
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Eg: Noon school'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
        </View>
        <View style={styles.bottomConta}>
          <CustomButton
            disabled={Buttonloading}
            onPress={() => {
              setButtonloading(true);
              if (!school) {
                showToast({
                  type: 'error',
                  text2: 'Please select which school you are going.',
                });
                setButtonloading(false);
              } else {
                navigation.navigate('OnBoarding_105', {
                  school: school,
                });
                setButtonloading(false);
              }
            }}
            backColor={OnxGreen}
            textSize={16}
            btnWidth={fullWidth}
            btnHeight={43 * heightRef}
            text={'Next'}
            fontWeight={'600'}
          />
        </View>
      </View>
    </>
  );
};

export default OnBoarding_104;
