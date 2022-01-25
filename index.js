/**
 * @format
 */
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import {Alert, AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
const errorHandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `
          Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}
  
          We will need to restart the app.
          `,
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};
setJSExceptionHandler(errorHandler, true);
setNativeExceptionHandler(errorString => {
  //You can do something like call an api to report to dev team here
  //example
  // fetch('http://<YOUR API TO REPORT TO DEV TEAM>?error='+errorString);
  //
});
AppRegistry.registerComponent(appName, () => App);
