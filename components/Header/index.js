import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import colors from '../../constants/colors';

const Header = ({ title, numCase, onPressBackAction }) => {
  

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <BorderlessButton onPress={onPressBackAction}>
          <Ionicons name='md-arrow-back' size={32} color={colors.red} />
        </BorderlessButton>
      </View>
      <Text style={styles.headerTitle}>{title}</Text>
      {numCase && <Text style={styles.subTitle}>Caso {numCase}</Text>}
    </View>
  );
};

export default Header;
