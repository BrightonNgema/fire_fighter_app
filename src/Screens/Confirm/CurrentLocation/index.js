/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Button = Animatable.createAnimatableComponent(TouchableOpacity);
const currenloc =
    'https://git.reviewboard.kde.org/media/uploaded/files/2015/07/30/019abdbb-80cf-4935-8d6d-0c3e6927d2b3__gps_fixed_600.png';

const CurrentLocationButton = ({onCurrent, on}) => {
  return (
    <Button
      onPress={onCurrent}
          activeOpacity={(0, 7)}
          animation={!on ? 'fadeInRight' : 'fadeOutRight'}
      style={styles.main}
    >
      <Image source={{ uri: currenloc }} style={styles.icon} />
    </Button>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 40,
    width: 40,
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#E1251C',
    position: 'absolute',
    bottom: 150,
    right: 20,
  },
  icon: { height: 30, width: 30, resizeMode: 'contain' },
});

export default CurrentLocationButton;
