import React from 'react'
import {} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import StartScreen from '../screens/StartScreen'
import CaseSelection from '../screens/CaseSelection'

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}} >
        <AppStack.Screen name='start' component={StartScreen} />
        <AppStack.Screen name='caseSelection' component={CaseSelection} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
