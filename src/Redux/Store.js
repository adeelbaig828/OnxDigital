import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducers from './index';
import thunk from 'redux-thunk';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
export {store, persistor};
