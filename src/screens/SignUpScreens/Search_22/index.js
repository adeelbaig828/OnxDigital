import React, {useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {fontColorLight, OnxGreen} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {heightRef} from 'src/config/screenSize';
import styles from './style';

const Search_22 = ({navigation}) => {
  const inset = useSafeAreaInsets();
  const textData = [
    {
      text: 'Lorem Ipsum Itagi lorem Ipsums',
    },
    {
      text: 'Lorem Ipsum Itagi lorem Ipsums',
    },
    {
      text: 'Lorem Ipsum Itagi lorem Ipsums',
    },
    {
      text: 'Lorem Ipsum Itagi lorem Ipsums',
    },
  ];
  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: Platform.OS === 'ios' ? inset.bottom : 0,
        },
      ]}>
      <OnxHeader
        borderBottomWidth2
        borderWidth1
        left={
          <View style={styles.header}>
            <OnxIcon
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
              colorIcon={fontColorLight}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            <Text bold={'600'} paddingLeft={16} color={fontColorLight}>
              Parent Connect
            </Text>
          </View>
        }
      />
      <View style={styles.underScroll}>
        <View style={styles.slide1}>
          <View style={styles.slide1Inner}>
            <Text style={styles.textSlider}>Illustration</Text>
          </View>
        </View>
        <View style={styles.bottomConta}>
          <View style={styles.textHeader}>
            <Text
              bold={'600'}
              marginbtm={10 * heightRef}
              fontSize={16}
              color={fontColorLight}
              width={'70%'}>
              Track your child progress with ease
            </Text>
            {textData.map(text => (
              <TextIcon iconcolor={fontColorLight} fontSize={12}>
                {text.text}
              </TextIcon>
            ))}
          </View>
          <View>
            <View style={styles.slide2}>
              <View style={styles.slide1Inner2}>
                <Text>Use following credentials to login</Text>
                <Text style={styles.textSlider2}>
                  Child registered No. : 9669432191
                </Text>
                <Text style={styles.textSlider3}>Parent Code : 1m2d32</Text>
              </View>
            </View>
            <CustomButton
              onPress={() => {
                navigation.navigate('NetworkError');
              }}
              backColor={OnxGreen}
              btnRadius={5}
              textSize={16}
              btnWidth={'100%'}
              btnHeight={43 * heightRef}
              text={'Go to App'}
              fontWeight={'bold'}
              marginT={15 * heightRef}
              paddingVertical={10}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Search_22;
