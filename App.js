import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { AppLoading } from 'expo';

import { useFonts, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import AppNavigator from './navigation/AppNavigator';

import colors from './constants/colors'

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
        <StatusBar barStyle='light-content'  backgroundColor={colors.primary} />
      </SafeAreaView>
    );
  }
}
