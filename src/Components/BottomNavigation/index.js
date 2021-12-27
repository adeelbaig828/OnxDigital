import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {styles} from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-dynamic-vector-icons';
const Tab = createMaterialTopTabNavigator();
import {
  BgColor,
  BorderColor,
  BottomNavColor,
  fontColorLight,
  IconDimColor,
  IconHighlightColor,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {HomeScreen} from 'src/screens/Home';
import PlusPageScreen from 'src/screens/PlusPage';
import OnxIcon from '../OnxIcons';
import RedeemScreen from 'src/screens/RedeemScreen';
import {heightRef, widthRef} from 'src/config/screenSize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AddAdressScreen from 'src/screens/AddAdressScreen';
import VideoScreen_1 from 'src/screens/VideoBooksScreens/VideoScreen_1';
import Tournaments_1 from 'src/screens/Tournaments/Tournaments_1';
import QuizzesMainScreen from 'src/screens/QuizzesScreen/Frame_63';

export const BottomNavigation = ({}) => {
  const inset = useSafeAreaInsets();
  return (
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
  );
};
