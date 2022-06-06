import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyles } from '../constants/styles';
import RecentBugs from '../screens/RecentBugs';
import AllBugs from '../screens/AllBugs';
import IconButton from '../components/IconButton';
import { FontAwesome } from '@expo/vector-icons'; 
import { removeToken } from '../store/redux/authenticationToken';

const BottomTab = createBottomTabNavigator();

const NavigationBugsOverview = () => {
        const dispatch = useDispatch();
        return (
          <BottomTab.Navigator
            screenOptions={({ navigation }) => ({
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
              headerTintColor: GlobalStyles.colors.white,
              tabBarStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
              tabBarActiveTintColor: GlobalStyles.colors.white,
             
              headerLeft: ({tintColor}) => (
                <IconButton
                name="plus"
                size={24}
                color={tintColor}
                onPress={() => navigation.navigate("ManageBug")}
              />
              ),
              headerRight: ({ tintColor }) => (
                <IconButton
                  name="sign-out"
                  size={24}
                  color={tintColor}
                  onPress={() => dispatch(removeToken())}
                />
              ),
            })}
          >
            <BottomTab.Screen
              name="RecentBugs"
              component={RecentBugs}
              options={{
                title: "Recent Bugs",
                tabBarLabel: "Recent",
                tabBarIcon: ({ size, color }) => (
                  <FontAwesome name="clock-o" size={size} color={color} />
                ),
              }}
            />
            <BottomTab.Screen
              name="AllBugs"
              component={AllBugs}
              options={{
                title: "All Bugs",
                tabBarLabel: "All",
                tabBarIcon: ({ size, color }) => (
                  <FontAwesome name="calendar" size={size} color={color} />
                ),
              }}
            />
          </BottomTab.Navigator>
        );
};

export default NavigationBugsOverview

const styles = StyleSheet.create({})