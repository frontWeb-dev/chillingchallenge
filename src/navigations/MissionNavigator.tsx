import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectScreen from "../screens/Mission/SelectScreen";
import MissionScreen from "../screens/Mission/MissionScreen";

export type MissionNavigatorParamList = {
  [x: string]: any;
  SelectScreen: undefined;
  MissionScreen: undefined;
};

const Stack = createNativeStackNavigator<MissionNavigatorParamList>();

const MissionNavigator: React.FC = () => {

  return (
    <>
      <Stack.Navigator initialRouteName="MissionScreen">
        <Stack.Screen name="SelectScreen" component={SelectScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MissionScreen" component={MissionScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
};

export default MissionNavigator;