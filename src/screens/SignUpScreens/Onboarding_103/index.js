import React, {useState} from 'react';
import {BorderColor, fontColorLight, OnxGreen} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import MultiColorProgressBar from 'src/Components/ProgressBar';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import View from 'src/Components/View';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
import {Grade_3, Grade_4} from 'src/utils/JSON';
const OnBoarding_103 = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState(null);

  const inset = useSafeAreaInsets();
  return (
    <>
      <MultiColorProgressBar number={2} />
      <View
        style={[
          styles.container,
          {
            paddingBottom: Platform.OS === 'ios' ? inset.bottom : 0,
          },
        ]}>
        <View style={styles.container2}>
          <View>
            <TextHeader
              marginTop={15 * heightRef}
              fontSizeHeader={32}
              fontWeight={'500'}
              Header={'Your Grade'}
              fontSizeDesc={14}
              colorDesc={fontColorLight}
              Description={'Please select which grade you are studying'}
            />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.grid}>
              {Grade_3.map((i, index) => (
                <CustomButton
                  onPress={() => setSelectIndex(i.name)}
                  marginHorizontal={4 * heightRef}
                  borderColor={BorderColor}
                  backColor={i.name === selectIndex ? OnxGreen : null}
                  borderWidth={1}
                  btnRadius={10}
                  textSize={16}
                  btnWidth={104 * widthRef}
                  btnHeight={104 * widthRef}
                  textColor={i.name === selectIndex ? 'white' : fontColorLight}
                  text={i.name}
                />
              ))}
            </View>
            <View style={styles.grid}>
              {Grade_4.map((i, index) => (
                <CustomButton
                  onPress={() => setSelectIndex(i.name)}
                  marginHorizontal={4 * heightRef}
                  marginV={14 * heightRef}
                  borderColor={BorderColor}
                  backColor={i.name === selectIndex ? OnxGreen : null}
                  borderWidth={1}
                  btnRadius={10}
                  textSize={16}
                  btnWidth={104 * widthRef}
                  btnHeight={104 * widthRef}
                  textColor={i.name === selectIndex ? 'white' : fontColorLight}
                  text={i.name}
                />
              ))}
            </View>
          </View>
        </View>
        <View style={styles.bottomConta}>
          <CustomButton
            onPress={() => {
              navigation.navigate('OnBoarding_104');
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

export default OnBoarding_103;
