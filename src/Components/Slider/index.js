import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const index = () => {
  return (
    <View>
      <Swiper autoplay={true} height={'100%'}>
        <View style={styles.slide1}>
          <Text>Illustration</Text>
        </View>
        <View style={styles.slide2}>
          <Text>Hello Swiper</Text>
        </View>
        <View style={styles.slide3}>
          <Text>Hello Swiper</Text>
        </View>
        <View style={styles.slide4}>
          <Text>Hello Swiper</Text>
        </View>
      </Swiper>
    </View>
  );
};

export default index;
