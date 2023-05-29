import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectScreen from "../screens/Mission/SelectScreen";
import MissionScreen from "../screens/Mission/MissionScreen";

export type MissionNavigatorParamList = {
  // 왜인지 모르겠지만 navigation.navigate()에서 타입 에러가 나서, any 타입 선언했습니다. ㅜㅜ
  [x: string]: any;
  SelectScreen: undefined;
  MissionScreen: undefined;
};

const Stack = createNativeStackNavigator<MissionNavigatorParamList>();

const MissionNavigator: React.FC = () => {

  return (
    <>
      <Stack.Navigator initialRouteName="SelectScreen">
        <Stack.Screen name="SelectScreen" component={SelectScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MissionScreen" component={MissionScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
};

export default MissionNavigator;