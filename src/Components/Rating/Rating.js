import * as React from 'react';
import {Rating} from 'react-native-ratings';

export function RatingComponent({backColor, iconSize}) {
  return (
    <Rating
      type="custom"
      ratingCount={5}
      imageSize={iconSize ? iconSize : 24}
      tintColor={backColor}
      ratingColor={'#FFE600'}
      startingValue={5}
      ratingBackgroundColor={'#E6E6E6'}
    />
  );
}
