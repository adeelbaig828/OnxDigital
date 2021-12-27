import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../Text';
import View from '../View';

import {styles} from './style';

const AppHeader = ({
  navigation,
  onPressCoins,
  onPressDrawer,
  onPressSearch,
  onPressGetPlus,
}) => {
  return (
    <View style={styles.MainView}>
      <TouchableOpacity onPress={onPressDrawer}>
        <Image
          style={styles.menuIcon}
          source={require('../../assets/menu.png')}
        />
      </TouchableOpacity>
      <View style={styles.RightContainer}>
        <TouchableOpacity onPress={onPressGetPlus} style={styles.GetButton}>
          <Text color={'#FFFFFF'} fontSize={10} bold={'600'}>
            Get PLUS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressCoins}
          style={{paddingHorizontal: 17}}>
          <Image source={require('../../assets/coin.png')} />
          <View style={styles.count}>
            <Text style={styles.countText}>12</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressSearch}
          style={styles.SearchContainer}>
          <Image
            source={require('../../assets/search.png')}
            style={styles.SearchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHeader;
