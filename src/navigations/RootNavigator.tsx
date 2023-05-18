import React from "react";
import { LinkingOptions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import UserScreen from "../screens/UserScreen";

type RootNavigatorParamList = {
  SignUpScreen: undefined;
  LoginScreen: undefined;
  UserScreen: { id: string };
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: [],
  config: {
    screens: {
      SignUpScreen: "signup",
      LoginScreen: "login",
      UserScreen: "user/:id",
    },
  },
};

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
};

export { RootNavigator, linking };