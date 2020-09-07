import React from 'react'
import {} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import StartScreen from '../screens/StartScreen'
import CaseSelection from '../screens/CaseSelection'
import ClueSelection from '../screens/ClueSelection'
import ClueScreen from '../screens/ClueScreen'
import ConfigScreen from '../screens/ConfigScreen'

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}} >
        <AppStack.Screen name='start' component={StartScreen} />
        <AppStack.Screen name='caseSelection' component={CaseSelection} />
        <AppStack.Screen name='clueSelection' component={ClueSelection} />
        <AppStack.Screen name='clueScreen' component={ClueScreen} />
        <AppStack.Screen name='configScreen' component={ConfigScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
