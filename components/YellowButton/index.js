import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import colors from '../../constants/colors';

const YellowButton = ({ text, icon, onPressAction }) => {
  return (
    <RectButton style={styles.button} onPress={onPressAction} >
      <MaterialCommunityIcons name={icon} size={34} color={colors.primary} />
      <Text style={styles.text}>{text}</Text>
    </RectButton>
  );
};

export default YellowButton;
