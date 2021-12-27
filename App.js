/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/Routes/routes';
import {Dimensions, StatusBar, useWindowDimensions} from 'react-native';
import View from 'src/Components/View';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BgColor} from 'src/assets/Colors/colors';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from 'src/Redux/Store';
import {PersistGate} from 'redux-persist/es/integration/react';

LogBox.ignoreAllLogs();
function App() {
  let d = useWindowDimensions();
  // const inset = useSafeAreaInsets();
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
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
