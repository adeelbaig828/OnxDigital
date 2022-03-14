import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Home';
import {SplashScreen} from '../screens/Splash';
import {OnboardingScreen1} from '../screens/OnBoarding1';
import OnBoardingScreen2 from 'src/screens/OnBoarding2';
import OnBoardingScreen3 from 'src/screens/OnBoarding3';
import OnBoardingScreen4 from 'src/screens/OnBoarding4';
import PlusPageScreen from 'src/screens/PlusPage';
import PaymentGatewayScreen from 'src/screens/PaymentGateWayScreen';
import RedeemSuccessfull from 'src/screens/RedeemSuccessfullScreen';
import CoinsPageScreen from 'src/screens/CoinsPage';
import CoinsConvertScreen from 'src/screens/CoinsConvertScreen';
import CoinHistoryScreens from 'src/screens/CoinHistoryScreens';
import RedeemScreen from 'src/screens/RedeemScreen';
import AddAdressScreen from 'src/screens/AddAdressScreen';
import AddAdressScreen2 from 'src/screens/AddAdressScreen2';
import AddAdressScreen3 from 'src/screens/AddAdressScreen3';
import RedeemGoldSuccessfull from 'src/screens/RedeemGoldSuccessfull';
import {BottomNavigation} from 'src/Components/BottomNavigation';
import SilverToGoldSuccessfull from 'src/screens/SilverToGoldScreens/RedeemSuccessfullScreen';
import SearchScreen_1 from 'src/screens/SearchPageScreen';
import SeeAllScreen_1 from 'src/screens/SearchPageScreen/seeAll';
import VideoScreen_1 from 'src/screens/VideoBooksScreens/VideoScreen_1';
import VideoScreen_2 from 'src/screens/VideoBooksScreens/VIdeoScreen_2';
import Tournaments_1 from 'src/screens/Tournaments/Tournaments_1';
import Muqabla_1 from 'src/screens/Tournaments/Muqabla_1';
import Muqabla_2 from 'src/screens/Tournaments/Muqabla_2';
import Muqabla_3 from 'src/screens/Tournaments/Muqabla_3';
import Successfull_1 from 'src/screens/Tournaments/Successfull_1';
import Successfull_2 from 'src/screens/Tournaments/Successfull_2';
import {createStackNavigator} from '@react-navigation/stack';
import AddAdressScreen4 from 'src/screens/AddAddressScreen4';
import MyDrawer from 'src/Components/DrawerNavigator';
import ProfileScreen from 'src/screens/Profile';
import OnBoarding_121 from 'src/screens/OnBoarding120';
import OnBoarding_98 from 'src/screens/OnBoarding98';
import OnBoarding_123 from 'src/screens/OnBoarding_123';
import OnBoarding_125 from 'src/screens/OnBoarding_125';
import OnBoarding_126 from 'src/screens/OnBoarding_126';
import ProfileScreen_2 from 'src/screens/Profile_2';
import OnBoarding_133 from 'src/screens/Onboarding_133';
import OnBoarding_102 from 'src/screens/SignUpScreens/Onboarding_102';
import OnBoarding_103 from 'src/screens/SignUpScreens/Onboarding_103';
import OnBoarding_104 from 'src/screens/SignUpScreens/Onboarding_104';
import OnBoarding_105 from 'src/screens/SignUpScreens/Onboarding_105';
import OnBoarding_106 from 'src/screens/SignUpScreens/Onboarding_106';
import Search_22 from 'src/screens/SignUpScreens/Search_22';
import QuizzesMainScreen from 'src/screens/QuizzesScreen/Frame_63';
import Muqabla_44 from 'src/screens/QuizzesScreen/Muqabla_44';
import Muqabla_43 from 'src/screens/QuizzesScreen/Muqabla_43';
import LeaderboardScreen from 'src/screens/QuizzesScreen/Frame_64';
import {fullHeight} from 'src/config/screenSize';
import {Transition} from 'react-native-reanimated';
import ChapterComplete from 'src/screens/VideoBooksScreens/SeccessfullScreen';
import NetworkError from 'src/screens/NetworkError';
import FewInformationScreen from 'src/screens/FewInformationScreen.js';
import ResetPasswordScreen from 'src/screens/ResetPasswordScreen';
import ForgotPasswordScreens_1 from 'src/screens/ForgotPasswordScreens/Forgot_Password _ 1';
import ForgotPasswordScreens_2 from 'src/screens/ForgotPasswordScreens/Forgot_Password_2';
import ForgotPasswordScreens_3 from 'src/screens/ForgotPasswordScreens/Forgot_Password_3';

const Stack = createStackNavigator();
const options = {
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
  gestureEnabled: false,
};
const bottomOptions = {
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [fullHeight, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};
function Route() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Muqabla_3} options={options} />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={options}
      />
      <Stack.Screen
        name="OnboardingScreen1"
        component={OnboardingScreen1}
        options={options}
      />
      <Stack.Screen name="Home" component={MyDrawer} options={options} />
      <Stack.Screen
        name="OnBoardingScreen2"
        component={OnBoardingScreen2}
        options={options}
      />
      <Stack.Screen
        name="OnBoardingScreen3"
        component={OnBoardingScreen3}
        options={options}
      />
      <Stack.Screen
        name="OnBoardingScreen4"
        component={OnBoardingScreen4}
        options={options}
      />
      <Stack.Screen
        name="ForgotPasswordScreens_1"
        component={ForgotPasswordScreens_1}
        options={options}
      />
      <Stack.Screen
        name="ForgotPasswordScreens_2"
        component={ForgotPasswordScreens_2}
        options={options}
      />
      <Stack.Screen
        name="ForgotPasswordScreens_3"
        component={ForgotPasswordScreens_3}
        options={options}
      />
      <Stack.Screen
        name="NetworkError"
        component={NetworkError}
        options={options}
      />
      <Stack.Screen
        name="OnBoarding_106"
        component={OnBoarding_106}
        options={options}
      />
      <Stack.Screen
        name="LeaderboardScreen"
        component={LeaderboardScreen}
        options={options}
      />
      <Stack.Screen
        name="Muqabla_43"
        component={Muqabla_43}
        options={options}
      />
      <Stack.Screen
        name="Muqabla_44"
        component={Muqabla_44}
        options={options}
      />
      <Stack.Screen
        name="QuizzesMainScreen"
        component={QuizzesMainScreen}
        options={options}
      />
      <Stack.Screen
        name="FewInformationScreen"
        component={FewInformationScreen}
        options={options}
      />
      <Stack.Screen name="Search_22" component={Search_22} options={options} />
      <Stack.Screen
        name="OnBoarding_133"
        component={OnBoarding_133}
        options={options}
      />
      <Stack.Screen
        name="OnBoarding_105"
        component={OnBoarding_105}
        options={options}
      />
      <Stack.Screen
        name="OnBoarding_104"
        component={OnBoarding_104}
        options={options}
      />
      <Stack.Screen
        name="OnBoarding_103"
        component={OnBoarding_103}
        options={options}
      />
      <Stack.Screen
        name="OnBoarding_102"
        component={OnBoarding_102}
        options={options}
      />
      <Stack.Screen
        name="ChapterComplete"
        component={ChapterComplete}
        options={options}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={options}
      />
      <Stack.Screen
        name="ProfileScreen_2"
        component={ProfileScreen_2}
        options={options}
      />
      <Stack.Screen
        name="OnBoarding_126"
        component={OnBoarding_126}
        options={options}
      />
      <Stack.Screen
        name="OnBoarding_125"
        component={OnBoarding_125}
        options={options}
      />
      <Stack.Screen
        name="OnBoarding_123"
        component={OnBoarding_123}
        options={options}
      />
      <Stack.Screen
        name="OnBoarding_98"
        component={OnBoarding_98}
        options={options}
      />
      <Stack.Screen
        name="OnBoarding_121"
        component={OnBoarding_121}
        options={options}
      />
      <Stack.Screen
        name="PlusPageScreen"
        component={PlusPageScreen}
        options={options}
      />
      <Stack.Screen
        name="RedeemSuccessfull"
        component={RedeemSuccessfull}
        options={options}
      />
      <Stack.Screen
        name="CoinsPageScreen"
        component={CoinsPageScreen}
        options={options}
      />
      <Stack.Screen
        name="CoinsConvertScreen"
        component={CoinsConvertScreen}
        options={options}
      />
      <Stack.Screen
        name="CoinHistoryScreens"
        component={CoinHistoryScreens}
        options={options}
      />
      <Stack.Screen
        name="AddAdressScreen3"
        component={AddAdressScreen3}
        options={options}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={options}
      />
      <Stack.Screen
        name="RedeemScreen"
        component={RedeemScreen}
        options={options}
      />
      <Stack.Screen
        name="AddAdressScreen"
        component={AddAdressScreen}
        options={options}
      />
      <Stack.Screen
        name="AddAdressScreen2"
        component={AddAdressScreen2}
        options={options}
      />
      <Stack.Screen
        name="SearchScreen_1"
        component={SearchScreen_1}
        options={options}
      />
      <Stack.Screen
        name="SeeAllScreen_1"
        component={SeeAllScreen_1}
        options={options}
      />
      <Stack.Screen
        name="VideoScreen_1"
        component={VideoScreen_1}
        options={options}
      />
      <Stack.Screen
        name="VideoScreen_2"
        component={VideoScreen_2}
        options={options}
      />
      <Stack.Screen
        name="Tournaments_1"
        component={Tournaments_1}
        options={options}
      />
      <Stack.Screen name="Muqabla_2" component={Muqabla_2} options={options} />
      <Stack.Screen name="Muqabla_1" component={Muqabla_1} options={options} />
      <Stack.Screen name="Muqabla_3" component={Muqabla_3} options={options} />
      <Stack.Screen
        name="Successfull_1"
        component={Successfull_1}
        options={options}
      />
      <Stack.Screen
        name="Successfull_2"
        component={Successfull_2}
        options={{
          transitionSpec: {
            open: {animation: 'timing', config: {duration: 300}},
            close: {animation: 'timing', config: {duration: 300}},
          },
          ...bottomOptions,
        }}
      />
      <Stack.Screen
        name="AddAdressScreen4"
        component={AddAdressScreen4}
        options={options}
      />
      <Stack.Screen
        name="SilverToGoldSuccessfull"
        component={SilverToGoldSuccessfull}
        options={options}
      />
      <Stack.Screen
        name="RedeemGoldSuccessfull"
        component={RedeemGoldSuccessfull}
        options={options}
      />

      <Stack.Screen
        name="PaymentGatewayScreen"
        component={PaymentGatewayScreen}
        options={options}
      />
    </Stack.Navigator>
  );
}

export default Route;
