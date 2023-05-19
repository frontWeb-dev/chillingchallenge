import React from "react";
import { LinkingOptions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import UserScreen from "../screens/UserScreen";
import MainScreen from "../screens/MainScreen";
import KakaoLogin from "../components/login/KakaoLogin";

export type RootNavigatorParamList = {
  MainScreen: undefined;
  SignUpScreen: undefined;
  LoginScreen: undefined;
  KakaoLogin: undefined;
  UserScreen: { id: string };
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: [],
  config: {
    screens: {
      MainScreen: "/",
      SignUpScreen: "signup",
      LoginScreen: "login",
      UserScreen: "user/:id",
    },
  },
};

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="KakaoLogin" component={KakaoLogin} />
      <Stack.Screen name="UserScreen" component={UserScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export { RootNavigator, linking };
