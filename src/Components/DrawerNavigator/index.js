import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import VideoScreen_1 from 'src/screens/VideoBooksScreens/VideoScreen_1';
import VideoScreen_2 from 'src/screens/VideoBooksScreens/VIdeoScreen_2';
import {BottomNavigation} from 'src/Components/BottomNavigation';
import {BgColor} from 'src/assets/Colors/colors';
import DrawerContent from '../DrawerContent.js';
import Route from 'src/Routes/routes.js';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={() => <DrawerContent />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: BgColor,
        },
      }}>
      <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;

function Design() {
  return (
    <View>
      <Text></Text>
    </View>
  );
}
