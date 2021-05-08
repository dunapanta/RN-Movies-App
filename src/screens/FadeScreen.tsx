import React, {useRef} from 'react';
import {View, Animated, Button} from 'react-native';

export const FadeScreen = () => {
  const opacity = useRef(new Animated.Value(0.2)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const FadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0.2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#874eee',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#06f234',
          borderColor: 'white',
          borderWidth: 5,
          width: 150,
          height: 150,
          marginBottom: 20,
          opacity: opacity,
        }}
      />

      <Button title="FadedIn" onPress={fadeIn} />

      <Button title="FadedOut" onPress={FadeOut} />
    </View>
  );
};
