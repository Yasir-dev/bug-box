import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/LoginScreen';
import { GlobalStyles } from '../constants/styles';

const Stack = createNativeStackNavigator();

const NavigationAuthenticate = () => {
    return (
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: GlobalStyles.colors.white,
            contentStyle: { backgroundColor: GlobalStyles.colors.primary450 },
          }}
        >
          <Stack.Screen name="BugBox" component={LoginScreen} />
        </Stack.Navigator>
      );
}

export default NavigationAuthenticate

const styles = StyleSheet.create({})