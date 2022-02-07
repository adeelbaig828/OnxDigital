import React from 'react';
import {Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  fontColorDark,
  fontColorLight,
  IconColorDark,
  OnxGreen,
  pureWhiteColor,
  textBackColor,
} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
import {Drawer, Drawer2} from 'src/utils/JSON';
import OnxIcon from '../OnxIcons';
import Text from '../Text';
import TextIcon from '../TextIcon';
import View from '../View';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const DrawerContent = () => {
  const navigation = useNavigation();

  const Profile = useSelector(state => state.muqablas.studentProfile);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header1}>
          <View style={styles.left}>
            <Image
              style={styles.menuIcon}
              source={require('src/assets/ProfilePic.png')}
            />
            <View>
              <Text bold={'500'} color={fontColorLight}>
                {Profile?.data?.first_name + ' ' + Profile?.data?.last_name}
              </Text>
              <Text color={fontColorDark} fontSize={12}>
                {Profile?.data?.grade?.name_num_th} Grade
              </Text>
              <Text marginTop={6 * heightRef} color={OnxGreen} fontSize={10}>
                9% completed
              </Text>
            </View>
          </View>
          <OnxIcon
            onPress={() => {
              navigation.navigate('ProfileScreen_2');
            }}
            colorIcon={OnxGreen}
            type={'AntDesign'}
            name={'rightcircleo'}
          />
        </View>
        <LinearGradient
          start={{x: 0, y: 1.5}}
          end={{x: 0, y: 0}}
          colors={['black', '#1e402f', '#3b845c']}
          style={styles.header2}>
          <View style={styles.plusMAin}>
            <View style={styles.plus}>
              <View style={{flexDirection: 'row'}}>
                <Text bold={'500'} color={pureWhiteColor} fontSize={12}>
                  KarMuqabala
                </Text>
                <View style={styles.plusColor}>
                  <Text bold={'500'} color={pureWhiteColor} fontSize={12}>
                    PLUS
                  </Text>
                </View>
              </View>
              <OnxIcon
                onPress={() => {
                  navigation.navigate('PlusPageScreen');
                }}
                size={12}
                colorIcon={pureWhiteColor}
                type={'Fontisto'}
                name={'angle-right'}
              />
            </View>
          </View>
          <Text marginTop={10 * heightRef} color={pureWhiteColor} fontSize={10}>
            Get access to Interactive books and more
          </Text>
        </LinearGradient>
        <View style={styles.separator} />
        {Drawer.map(i => (
          <TextIcon
            onPressText={() => {
              i.id == 1
                ? navigation.navigate('BottomNavigation', {
                    screen: 'Tournaments_1',
                  })
                : i.id == 2
                ? navigation.navigate('BottomNavigation', {
                    screen: 'QuizzesMainScreen',
                  })
                : i.id == 3
                ? navigation.navigate('BottomNavigation', {
                    screen: 'VideoScreen_1',
                  })
                : i.id == 4
                ? navigation.navigate('CoinsConvertScreen', {
                    from: 'drawer',
                  })
                : i.id == 5
                ? navigation.navigate('RedeemScreen')
                : null;
            }}
            marginLeft={10}
            name={'checkbox-blank'}
            type={'MaterialCommunityIcons'}
            size={30}
            color={fontColorLight}
            iconcolor={IconColorDark}
            fontSize={12}>
            {i.name}
          </TextIcon>
        ))}
        <View style={styles.separator} />
        {Drawer2.map(i => (
          <>
            <TextIcon
              onPressText={() => {
                i.id == 2
                  ? navigation.navigate('OnBoarding_125')
                  : i.id == 3
                  ? navigation.navigate('BottomNavigation', {
                      screen: 'VideoScreen_1',
                    })
                  : i.id == 4
                  ? navigation.navigate('OnBoarding_126')
                  : i.id == 5
                  ? navigation.navigate('RedeemScreen')
                  : navigation.navigate('Search_22');
              }}
              marginLeft={10}
              name={'checkbox-blank'}
              type={'MaterialCommunityIcons'}
              size={30}
              color={fontColorLight}
              iconcolor={IconColorDark}
              fontSize={12}>
              {i.name}
            </TextIcon>
            {i.id == 2 ? (
              <View>
                <View style={styles.silver}>
                  <Text color={OnxGreen} fontSize={8}>
                    (Get 20 silver coins)
                  </Text>
                </View>
              </View>
            ) : null}
          </>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // backgroundColor: 'red',
  },
  menuIcon: {
    width: 56 * heightRef,
    height: 56 * heightRef,
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  header2: {
    height: 76 * heightRef,
    width: '100%',
    paddingHorizontal: 10 * heightRef,

    marginTop: 10 * heightRef,
    justifyContent: 'center',
  },
  plus: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%',
  },
  plusMAin: {
    flexDirection: 'row',
  },
  plusColor: {
    justifyContent: 'center',
    backgroundColor: OnxGreen,
    marginLeft: 6,
    alignItems: 'center',
    width: 44 * widthRef,
    height: 16 * heightRef,
    borderRadius: 2,
  },
  separator: {
    backgroundColor: textBackColor,
    height: 8 * heightRef,
  },
  silver: {
    position: 'absolute',
    left: '21%',
    bottom: 5 * heightRef,
  },
});
