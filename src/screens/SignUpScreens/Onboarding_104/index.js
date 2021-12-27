import React, {useState} from 'react';
import {
  BorderColor,
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import MultiColorProgressBar from 'src/Components/ProgressBar';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import View from 'src/Components/View';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
import {Grade_3, Grade_4} from 'src/utils/JSON';
import TextFeild from 'src/Components/TextFeild';
const OnBoarding_104 = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState(null);

  const inset = useSafeAreaInsets();
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
            onChangeText={() => {}}
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
            onPress={() => {
              navigation.navigate('OnBoarding_105');
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
