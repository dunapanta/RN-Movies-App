import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGadient from 'react-native-linear-gradient';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  return (
    <View style={{flex: 1}}>
      <LinearGadient
        colors={['#668877', '#558875', 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.8}}
      />
      {children}
    </View>
  );
};
