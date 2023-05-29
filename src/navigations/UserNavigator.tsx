import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserScreen from "../screens/User/UserScreen";
import UserSettingScreen from "../screens/User/UserSettingScreen";

export type UserNavigatorParamList = {
  [x: string]: any;
  UserScreen: undefined;
  UserSettingScreen: undefined;
};

const Stack = createNativeStackNavigator<UserNavigatorParamList>();

const UserNavigator: React.FC = () => {

  return (
    <>
      <Stack.Navigator initialRouteName="UserScreen">
        <Stack.Screen name="UserScreen" component={UserScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserSettingScreen" component={UserSettingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
};

export default UserNavigator;