import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './style';

export function DatePickerComponent() {
  return (
    <View style={styles.dateContainer}>
      <Text style={styles.publishName}>Published by : pub ABC</Text>
      <View style={styles.datePicker}>
        <Image source={require('../../assets/calender.png')} />
        <Text style={styles.text}>Expiry Date 30.12.2021</Text>
      </View>
    </View>
  );
}
