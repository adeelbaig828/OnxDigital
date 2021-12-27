import React, {useState} from 'react';
import {Alert, Modal, Text, View, Image} from 'react-native';
import {styles} from './style';
import RatingComponent from '../Rating/Rating';

export const CustomModal = ({show}) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={show}>
        <View style={styles.root}>
          <Image
            style={styles.backIconImgStyle}
            source={require('../../assets/backarrow.png')}
          />
          <View style={styles.itemStyle}>
            <View style={styles.root}>
              <Text style={styles.titleText}>{'item.title'}</Text>
              <View style={styles.ratingContainer}>
                <RatingComponent backColor={'#0D7B8D'} />
                <View style={styles.ratingTextCon}>
                  <Text style={styles.ratingText}>{'4.0'}</Text>
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <Text style={styles.timing}>open 10.30-21.00</Text>
                <View style={styles.ratingTextCon}>
                  <Text style={styles.foodtype}>corean food</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bioContainer}>
            <Text style={styles.bioText}>Bio</Text>
            <Text style={styles.simpText}>history</Text>
            <Text style={styles.simpText}>mission</Text>
            <Text style={styles.simpText}>delivery</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
