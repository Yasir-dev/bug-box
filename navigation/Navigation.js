import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavigationAuthenticate from "./NavigationAuthenticate";
import NavigationAuthenticated from "./NavigationAuthenticated";
import { useDispatch, useSelector } from "react-redux";
import { saveToken } from "../store/redux/authenticationToken";

const Navigation = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authenticationToken = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        dispatch(saveToken({ token: storedToken }));
      }

      setIsTryingLogin(false);
    };

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  let content = <NavigationAuthenticate />;

  if (authenticationToken) {
    content = <NavigationAuthenticated />;
  }

  return <NavigationContainer>{content}</NavigationContainer>;
};

export default Navigation;

const styles = StyleSheet.create({});
