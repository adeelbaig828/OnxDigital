import {useNavigation} from '@react-navigation/native';
import  React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {
  fontColorDark,
  fontColorLight,
  OnxGreen,
  pureWhiteColor,
  textBackColor,
} from 'src/assets/Colors/colors';
import AppHeader from 'src/Components/AppHeader';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import FlatListComponent from 'src/Components/FlatListComponent';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import TextIcon from 'src/Components/TextIcon';
import {heightRef, widthRef} from 'src/config/screenSize';
import { GET_HOMESCREEN_SLIDER } from 'src/Redux/Reducers/Auth/AuthActions';
import {styles} from './style';
export function HomeScreen() {
  const barearToken = useSelector(state => state.auth.token);
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [SliderData, setSliderData] = useState([]);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    handleSlider();
  }, []);
  const handleSlider = () => {
    GET_HOMESCREEN_SLIDER(barearToken)(dispatch)
      .then(res => {
        if (res.code === 200) {
          setSliderData(res.data.slides.data)
        } else {
          console.log('else then res', res);
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
  const textData = [
    {
      text: 'Get access to interactive books',
    },
    {
      text: 'Earn silver coins at 2X rate',
    },
    {
      text: 'Earn silver coins at 2X rate',
    },
    {
      text: 'Earn silver coins at 2X rate',
    },
  ];
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView  style={styles.mainRoot} showsVerticalScrollIndicator={false}>
        <TextHeader
          fontWeight={'600'}
          Header={'Hey, John Doe'}
          Description={'Let’s explore learning with quizzes'}
        />
        <FlatListComponent
          TextColorDesc={fontColorLight}
          TextColor={fontColorDark}
          imageSource={require('../../assets/newback.png')}
          contentTitle="INTRODUCING"
          contentDescription={`Experience the 
whole new way of playing`}
          // configs={{title: {fontSize:}}}
          type={1}
          data={SliderData}
        />
        <TextHeader
          fontWeight={'600'}
          marginTop={15}
          Header={'Tournaments'}
          Description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        />
        <FlatListComponent
          TextColor={fontColorLight}
          TextColorDesc={fontColorDark}
          contentTitle="The Matrix"
          contentDescription="Lorem ipsum dolor sit amet."
          // data={[1, 1, 1, 1]}
          data={SliderData}

        />
        <Animated.View
          exiting={FadeIn}
          entering={FadeOut}
          style={{flex: 1, display: show ? 'flex' : 'none'}}>
          <View style={styles.textHeader}>
            <Text
              bold={'600'}
              fontSize={16}
              color={fontColorLight}
              width={'70%'}>
              Get{' <Query> '}subscription and unlock more
            </Text>
            {textData.map(text => (
              <TextIcon iconcolor={pureWhiteColor} fontSize={12}>
                {text.text}
              </TextIcon>
            ))}
          </View>
          <CustomButton
            backColor={OnxGreen}
            btnRadius={5}
            textSize={16}
            // onPress={() => modalRef.current.open()}
            btnWidth={'100%'}
            btnHeight={43 * heightRef}
            text={'Get Subscription'}
            fontWeight={'bold'}
            marginT={15 * heightRef}
            paddingVertical={10}
          />
          <Text paddingVertical={10} fontSize={12}>
            How questions about the subscription?
          </Text>
          <CustomButton
            btnRadius={5}
            textColor={fontColorLight}
            textSize={16}
            btnWidth={'100%'}
            btnHeight={43 * heightRef}
            borderWidth={0.2}
            text={'Talk to our experts'}
            fontWeight={'bold'}
            paddingVertical={10}
            borderColor={fontColorDark}
          />
        </Animated.View>
        <TextHeader
          fontWeight={'600'}
          marginTop={15}
          Header={'Quizzes'}
          Description={'Let’s explore learning with quizzes'}
        />
        <FlatListComponent
          type={3}
          marginR={24 * widthRef}
          renderItem={({item, index, container}) => {
            return (
              <View style={[styles.quizzes, container]}>
                <Image source={require('../../assets/MaskGroup.png')} />
                <View style={styles.right}>
                  <Text color={fontColorLight} width={150 * widthRef}>
                    Respect for Public Property
                  </Text>
                  <Text
                    fontSize={12}
                    color={fontColorDark}
                    marginTop={7 * heightRef}
                    width={150 * widthRef}>
                    Class 9 • English
                  </Text>
                </View>
              </View>
            );
          }}
          data={[1, 1, 1, 1]}
        />
        <CustomCard
          marginV={25 * heightRef}
          backColor={textBackColor}
          btnWidth={'100%'}
          btnHeight={88 * heightRef}
          btnRadius={5}>
          <>
            <View style={styles.scndCont}>
              <View style={styles.leftBox}>
                <View style={styles.headerMain}>
                  <TextHeader
                    fontWeight={'600'}
                    fontSizeHeader={14}
                    Header={'Muqabla of the day'}
                    Description={'Play and win 10 silver coins today'}
                  />
                </View>
                <View style={styles.now}>
                  <Text
                    onPress={() => {
                      navigation.navigate('CoinsConvertScreen', {
                        from: 'Home',
                      });
                    }}
                    paddingRight={5}
                    color={OnxGreen}
                    fontSize={10}>
                    Play Muqabla
                  </Text>
                  <OnxIcon
                    colorIcon={OnxGreen}
                    size={19}
                    type={'AntDesign'}
                    name={'rightcircle'}
                  />
                </View>
              </View>
              <View style={styles.rightBox}>
                <Image
                  style={styles.images}
                  source={require('src/assets/Group43.png')}
                />
              </View>
            </View>
          </>
        </CustomCard>
        <TextHeader
          marginTop={20}
          Header={'Visual Books'}
          Description={'Let’s explore learning with quizzes'}
        />
        <ImageBackground
          source={require('../../assets/wholebacl.png')}
          style={styles.imageStyleScnd}>
          <OnxIcon
            left={95 * heightRef}
            top={10}
            size={35}
            colorIcon={fontColorDark}
            position={'absolute'}
            type={'MaterialIcons'}
            name={'lock'}
          />
          <View style={styles.innerIMage}>
            <View style={styles.headerMain}>
              <TextHeader
                fontWeightDes={'300'}
                fontWeight={'400'}
                fontSizeDesc={10}
                colorDesc={fontColorLight}
                fontSizeHeader={14}
                Header={'Mathematics'}
                Description={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet'
                }
              />
            </View>
            <View style={styles.now}>
              <Text
                onPress={() => {
                  navigation.navigate('CoinsConvertScreen');
                }}
                paddingRight={5}
                color={fontColorLight}
                fontSize={10}>
                Play Book
              </Text>
              <OnxIcon
                colorIcon={fontColorLight}
                size={15}
                type={'AntDesign'}
                name={'right'}
              />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
