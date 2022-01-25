/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {LogBox, StatusBar, useWindowDimensions} from 'react-native';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {BgColor} from 'src/assets/Colors/colors';
import View from 'src/Components/View';
import {persistor, store} from 'src/Redux/Store';
import Route from './src/Routes/routes';
LogBox.ignoreAllLogs();
function App() {
  //this is used to detect network status

  // const unsubscribe = NetInfo.addEventListener(state => {
  //   console.log('Connection type', state.type);
  //   console.log('Is connected?', state.isConnected);
  // });
  // unsubscribe();
  let d = useWindowDimensions();
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle={'light-content'}
          />
          <View
            style={{
              backgroundColor: BgColor,
              height: d.height > d.width ? StatusBar.currentHeight : 0,
              width: '100%',
            }}
          />
          <NavigationContainer>
            <Route />
          </NavigationContainer>
          <Toast visibilityTime={1000} bottomOffset={140} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
