import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {
  BgColor,
  fontColorDark,
  fontColorLight,
  OnxGreen,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import FlatListComponent from 'src/Components/FlatListComponent';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';

const Tab = createMaterialTopTabNavigator();

const ChapterComplete = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('last week');
  const [items, setItems] = useState([
    {label: 'Last Week', value: 'Last Week'},
    {label: 'Last Month', value: 'Last Month'},
  ]);
  return (
    <View style={{flex: 1, backgroundColor: BgColor}}>
      <OnxHeader
        borderBottomWidth2
        borderWidth1
        left={
          <OnxIcon
            onPress={() => {
              navigation.navigate('Home');
            }}
            colorIcon={fontColorLight}
            name={'arrow-left'}
            type={'MaterialCommunityIcons'}
          />
        }
        right={
          <CustomButton
            onPress={() => {
              navigation.navigate('Muqabla_3');
            }}
            backColor={OnxGreen}
            btnRadius={5}
            textSize={16}
            btnWidth={140 * widthRef}
            btnHeight={32 * heightRef}
            text={'Continue'}
            fontWeight={'600'}
            paddingVertical={10}
          />
        }
      />
      <View style={styles.mainContainer}>
        <Image
          resizeMode={'contain'}
          style={styles.imageStyle}
          source={require('src/assets/successImage.png')}
        />
        <Text
          fontSize={16}
          bold={'600'}
          paddingVertical={20}
          color={fontColorLight}>
          Trading Successful
        </Text>
        <View style={styles.TextStyle}>
          <Text
            textAlign={'center'}
            fontSize={12}
            color={fontColorDark}
            backColor={textBackColor}>
            Lorem ipsum dolor sit am, consectetur adipiscing elit.
          </Text>
        </View>
        <View style={styles.flatListStyle}>
          <FlatListComponent
            dots
            Button
            ButtonText={'Play Now'}
            ButtonOnPress={() => console.log('Playbutton pressed')}
            TextColorDesc={fontColorLight}
            TextColor={fontColorDark}
            imageSource={require('src/assets/newback.png')}
            contentTitle="Play and win"
            contentDescription={`Want to test your knowledge? \n Play and imprve`}
            // configs={{title: {fontSize:}}}
            type={1}
            data={[1, 1, 1, 1]}
          />
        </View>
      </View>
      <View style={styles.underlineText}>
        <Text
          marginbtm={10 * heightRef}
          color={fontColorDark}
          textDecorationLine="underline">
          Don’t ask me again
        </Text>
        <Text>Go to “Quizzes” tab to see all the </Text>
      </View>
    </View>
  );
};

export default ChapterComplete;
