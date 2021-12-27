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
import {Grade, Grade1, Grade2, Grade_3, Grade_4} from 'src/utils/JSON';
import {CustomCard} from 'src/Components/customCard';
import OnxIcon from 'src/Components/OnxIcons';
const OnBoarding_106 = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState([]);

  const inset = useSafeAreaInsets();
  return (
    <>
      <MultiColorProgressBar number={5} />
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
              Header={'Fav. Subject'}
              fontSizeDesc={14}
              colorDesc={fontColorLight}
              Description={'Please select which are your favroute subjects'}
            />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.grid}>
              {Grade.map((i, index) => (
                <CustomCard
                  btnRadius={10}
                  backColor={selectIndex.includes(i.name) ? OnxGreen : null}
                  marginHorizontal={5}
                  onPress={() => {
                    if (selectIndex.includes(i.name)) {
                      setSelectIndex(s => s.filter(v => v != i.name));
                    } else {
                      setSelectIndex(s => s.concat(i.name));
                    }
                  }}
                  btnWidth={104 * widthRef}
                  btnHeight={104 * widthRef}
                  style={{borderWidth: 1}}
                  borderColor={BorderColor}>
                  <>
                    <View style={styles.innerCard}>
                      <View style={styles.imageView}>
                        <OnxIcon
                          onPress={() => {
                            if (selectIndex.includes(i.name)) {
                              setSelectIndex(s => s.filter(v => v != i.name));
                            } else {
                              setSelectIndex(s => s.concat(i.name));
                            }
                          }}
                          colorIcon={
                            i.name === selectIndex ? 'white' : fontColorLight
                          }
                          size={27}
                          type={'MaterialCommunityIcons'}
                          name={
                            selectIndex.includes(i.name)
                              ? 'check-circle-outline'
                              : 'checkbox-blank-circle-outline'
                          }
                        />
                      </View>
                      <View style={styles.coinView}>
                        <Text
                          color={
                            i.name === selectIndex ? 'white' : fontColorLight
                          }>
                          {i.name}
                        </Text>
                      </View>
                    </View>
                  </>
                </CustomCard>
              ))}
            </View>
            <View style={styles.grid}>
              {Grade1.map((i, index) => (
                <CustomCard
                  btnRadius={10}
                  backColor={selectIndex.includes(i.name) ? OnxGreen : null}
                  marginHorizontal={5}
                  onPress={() => {
                    if (selectIndex.includes(i.name)) {
                      setSelectIndex(s => s.filter(v => v != i.name));
                    } else {
                      setSelectIndex(s => s.concat(i.name));
                    }
                  }}
                  btnWidth={106 * widthRef}
                  btnHeight={106 * widthRef}
                  style={{borderWidth: 1.4}}
                  borderColor={BorderColor}>
                  <>
                    <View style={styles.innerCard}>
                      <View style={styles.imageView}>
                        <OnxIcon
                          onPress={() => {
                            if (selectIndex.includes(i.name)) {
                              setSelectIndex(s => s.filter(v => v != i.name));
                            } else {
                              setSelectIndex(s => s.concat(i.name));
                            }
                          }}
                          colorIcon={
                            i.name === selectIndex ? 'white' : fontColorLight
                          }
                          size={27}
                          type={'MaterialCommunityIcons'}
                          name={
                            selectIndex.includes(i.name)
                              ? 'check-circle-outline'
                              : 'checkbox-blank-circle-outline'
                          }
                        />
                      </View>
                      <View style={styles.coinView}>
                        <Text
                          color={
                            i.name === selectIndex ? 'white' : fontColorLight
                          }>
                          {i.name}
                        </Text>
                      </View>
                    </View>
                  </>
                </CustomCard>
              ))}
            </View>
            <View style={styles.grid}>
              {Grade2.map((i, index) => (
                <CustomCard
                  btnRadius={10}
                  marginHorizontal={5}
                  onPress={() => {
                    if (selectIndex.includes(i.name)) {
                      setSelectIndex(s => s.filter(v => v != i.name));
                    } else {
                      setSelectIndex(s => s.concat(i.name));
                    }
                  }}
                  backColor={selectIndex.includes(i.name) ? OnxGreen : null}
                  btnWidth={104 * widthRef}
                  btnHeight={104 * widthRef}
                  style={{borderWidth: 1.4}}
                  borderColor={BorderColor}>
                  <>
                    <View style={styles.innerCard}>
                      <View style={styles.imageView}>
                        <OnxIcon
                          onPress={() => {
                            if (selectIndex.includes(i.name)) {
                              setSelectIndex(s => s.filter(v => v != i.name));
                            } else {
                              setSelectIndex(s => s.concat(i.name));
                            }
                          }}
                          colorIcon={
                            i.name === selectIndex ? 'white' : fontColorLight
                          }
                          size={27}
                          type={'MaterialCommunityIcons'}
                          name={
                            selectIndex.includes(i.name)
                              ? 'check-circle-outline'
                              : 'checkbox-blank-circle-outline'
                          }
                        />
                      </View>
                      <View style={styles.coinView}>
                        <Text
                          color={
                            i.name === selectIndex ? 'white' : fontColorLight
                          }>
                          {i.name}
                        </Text>
                      </View>
                    </View>
                  </>
                </CustomCard>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.bottomConta}>
          <CustomButton
            onPress={() => {
              navigation.navigate('Home');
            }}
            backColor={OnxGreen}
            textSize={16}
            btnWidth={fullWidth}
            btnHeight={43 * heightRef}
            text={'Finish'}
            fontWeight={'600'}
          />
        </View>
      </View>
    </>
  );
};

export default OnBoarding_106;
