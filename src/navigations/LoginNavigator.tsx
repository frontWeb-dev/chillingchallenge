import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "@screens/Join/SignInScreen";
import SignUpScreen from "@screens/Join/SignUpScreen";
import FindPasswordScreen from "@screens/Join/FindPasswordScreen";

export type LoginNavigatorParamList = {
  [x: string]: any;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  FindPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<LoginNavigatorParamList>();

const LoginNavigator: React.FC = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FindPasswordScreen"
          component={FindPasswordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default LoginNavigator;
