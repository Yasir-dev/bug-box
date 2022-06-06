import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStyles } from '../constants/styles';
import ManageBug from '../screens/ManageBug';
import NavigationBugsOverview from './NavigationBugsOverview';

const Stack = createNativeStackNavigator();

const NavigationAuthenticated = () => {
    return (
        <Stack.Navigator
                screenOptions={{
                  headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                  headerTintColor: GlobalStyles.colors.white,
                }}
              >
                <Stack.Screen
                  name="BugsOverview"
                  component={NavigationBugsOverview}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="ManageBug"
                  component={ManageBug}
                  options={{
                    presentation: "modal",
                  }}
                />
              </Stack.Navigator>
      );
}

export default NavigationAuthenticated

const styles = StyleSheet.create({})