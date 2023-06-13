import React from "react";
import { LinkingOptions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "@screens/SplashScreen";
import AfterLoginSplashScreen from "@screens/AfterLoginSplashScreen";
import OnBoardingScreen from "@screens/OnBoarding";
import SignInScreen from "@screens/Join/SignInScreen";
import TabNavigator from "./TabNavigator";
import KakaoLogin from "@components/login/KakaoLogin";
import FirebaseLoginScreen from "@screens/FirebaseLoginScreen";
import LoginNavigator from "./LoginNavigator";

export type RootNavigatorParamList = {
  [x: string]: any;
  LoginNavigator: undefined;
  TabNavigator: undefined;
  OnBoardingScreen: undefined;
  SplashScreen: undefined;
  AfterLoginSplashScreen: undefined;
  FirebaseLoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: [],
};

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="FirebaseLoginScreen"
        component={FirebaseLoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="AfterLoginSplashScreen"
        component={AfterLoginSplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginNavigator"
        component={LoginNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export { RootNavigator, linking };
