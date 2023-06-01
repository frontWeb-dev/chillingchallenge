import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons, FontAwesome } from "@expo/vector-icons";

import FeedScreen from "../screens/FeedScreen";
import UserNavigator from "./UserNavigator";
import MissionNavigator from "./MissionNavigator";
import { useColorScheme } from "react-native";

const TabBar = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <TabBar.Navigator screenOptions={{ tabBarStyle: { padding: 10 } }}>
      <TabBar.Screen
        name="미션 선택"
        component={MissionNavigator}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#47af51",
          },
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <FontAwesome5 name="running" size={24} color="#9fdfa4" />
            ) : (
              <FontAwesome5 name="running" size={24} color="#47af51" />
            ),
        }}
      />
      <TabBar.Screen
        name="피드"
        component={FeedScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#47af51",
          },
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <Ionicons name="people" size={24} color="#9fdfa4" />
            ) : (
              <Ionicons name="people" size={24} color="#47af51" />
            ),
        }}
      />
      <TabBar.Screen
        name="프로필"
        component={UserNavigator}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#47af51",
          },
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <FontAwesome name="user-circle" size={24} color="#9fdfa4" />
            ) : (
              <FontAwesome name="user-circle" size={24} color="#47af51" />
            ),
        }}
      />
    </TabBar.Navigator>
  );
};

export default TabNavigator;
