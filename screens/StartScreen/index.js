import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Scotland Yard</Text>
      </View>
    </View>
  );
};

export default StartScreen;
