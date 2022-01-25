import React from 'react';
import {StyleSheet} from 'react-native';
import Orientation from 'react-native-orientation';
import VP from 'react-native-video-controls';
// import Video from 'react-native-video';
const VideoPlayer = () => {
  const fullScreen = () => {
    Orientation.getOrientation((err, orientation) => {
      if (orientation == 'LANDSCAPE') {
        Orientation.lockToPortrait();
        console.log('lockToPortrait');
      } else {
        Orientation.lockToLandscape();
        console.log('lockToPortrait');
      }
    });
  };
  return (
    <VP
      isFullscreen={true}
      tapAnywhereToPause={true}
      disableVolume
      onEnterFullscreen={() => fullScreen()}
      disableBack
      // repeat={true}
      source={require('../../assets/hd1722.mov')}
    />
  );
};
const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default VideoPlayer;
