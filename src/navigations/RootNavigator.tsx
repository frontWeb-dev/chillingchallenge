import React from "react";
import { LinkingOptions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoardingScreen from "../screens/OnBoarding";
import MainScreen from "../screens/MainScreen";
import KakaoLogin from "../components/login/KakaoLogin";
import TabNavigator from "./TabNavigator";

export type RootNavigatorParamList = {
  [x: string]: any;
  MainScreen: undefined;
  TabNavigator: undefined;
  KakaoLogin: undefined;
  OnBoardingScreen: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: [],
  config: {
    screens: {
      MainScreen: "/",
    },
  },
};

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="TabNavigator">
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="KakaoLogin" component={KakaoLogin} />
    </Stack.Navigator>
  );
};

export { RootNavigator, linking };
