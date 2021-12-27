import React from 'react';
import {SafeAreaView, View, Text, Image, TextInput} from 'react-native';
import {styles} from './style';

export const SearchInput = ({text, onChangeText, placeholder}) => {
  return (
    <SafeAreaView style={styles.root}>
      <Image
        style={styles.locationIcon}
        source={require('../../assets/location.png')}
      />
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={text}
        placeholderTextColor={'#E6E6E6'}
      />
      <Image
        style={styles.locationIcon}
        source={require('../../assets/voiceicon.png')}
      />
    </SafeAreaView>
  );
};
