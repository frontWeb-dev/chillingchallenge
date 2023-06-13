import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FeedScreen from "@screens/Feed/FeedScreen";
import FeedDetailScreen from "@screens/Feed/FeedDetailScreen";
import TempFeedScreen from "@screens/Feed/TempFeedScreen";
import TempFeedDetailScreen from "@screens/Feed/TempFeedDetailScreen";

export type UserNavigatorParamList = {
  [x: string]: any;
  FeedScreen: undefined;
  FeedDetailScreen: undefined;
  TempFeedScreen: undefined;
  TempFeedDetailScreen: undefined;
};

const Stack = createNativeStackNavigator<UserNavigatorParamList>();

const FeedNavigator: React.FC = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="FeedScreen">
        <Stack.Screen name="FeedScreen" component={FeedScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="FeedDetailScreen"
          component={FeedDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TempFeedScreen"
          component={TempFeedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TempFeedDetailScreen"
          component={TempFeedDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default FeedNavigator;
