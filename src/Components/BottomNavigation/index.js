import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  BgColor,
  BorderColor,
  fontColorLight,
  IconDimColor,
} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
import {HomeScreen} from 'src/screens/Home';
import QuizzesMainScreen from 'src/screens/QuizzesScreen/Frame_63';
import Tournaments_1 from 'src/screens/Tournaments/Tournaments_1';
import VideoScreen_1 from 'src/screens/VideoBooksScreens/VideoScreen_1';
import AppHeader from '../AppHeader';
import {styles} from './style';
const Tab = createMaterialTopTabNavigator();

export const BottomNavigation = ({}) => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{width: '100%', height: inset.top, backgroundColor: BgColor}}
      />
      <AppHeader
        onPressCoins={() => navigation.navigate('CoinsPageScreen')}
        onPressSearch={() => navigation.navigate('SearchScreen_1')}
        onPressGetPlus={() => navigation.navigate('PlusPageScreen')}
        onPressDrawer={() => navigation.openDrawer()}
      />
      <Tab.Navigator
        tabBarPosition="bottom"
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarShowLabel: false,
          swipeEnabled: false,
          tabBarIndicatorStyle: {backgroundColor: 'transparent'},
          tabBarStyle: {backgroundColor: BgColor},
          tabBarIconStyle: {
            width: 30 * widthRef,
            height: 30 * heightRef,
          },
          tabBarItemStyle: {
            borderColor: 'red',
            height: 40 * heightRef + inset.bottom,
            borderTopWidth: 1,
            borderTopColor: BorderColor,
            paddingBottom: inset.bottom,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <>
                <Image
                  style={[
                    styles.ImageIconStyle,
                    {
                      tintColor: focused ? fontColorLight : IconDimColor,
                    },
                  ]}
                  source={require('src/assets/IconsHome.png')}
                />
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Tournaments_1"
          component={Tournaments_1}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={[
                  styles.ImageIconStyle,
                  {
                    tintColor: focused ? fontColorLight : IconDimColor,
                  },
                ]}
                source={require('src/assets/IconsTrophy.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="QuizzesMainScreen"
          component={QuizzesMainScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={[
                  styles.ImageIconStyle,
                  {
                    tintColor: focused ? fontColorLight : IconDimColor,
                  },
                ]}
                source={require('src/assets/Iconsmind.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="VideoScreen_1"
          component={VideoScreen_1}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={[
                  styles.ImageIconStyle,
                  {
                    tintColor: focused ? fontColorLight : IconDimColor,
                  },
                ]}
                source={require('src/assets/IconsBook2.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
