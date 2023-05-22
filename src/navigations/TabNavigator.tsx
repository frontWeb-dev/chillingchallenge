import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons, FontAwesome, } from "@expo/vector-icons";

import SelectScreen from "../screens/SelectScreen";
import CommunityScreen from "../screens/CommunityScreen";
import UserScreen from "../screens/UserScreen";

const TabBar = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <TabBar.Navigator>
      <TabBar.Screen
        name="미션 선택"
        component={SelectScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused  ? (
              <FontAwesome5 name="running" size={24} color="#e0e0e0" />
              ) : (
              <FontAwesome5 name="running" size={24} color="#0c9bfb" />
            ),
        }}
      />
      <TabBar.Screen
        name="피드"
        component={CommunityScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused  ? (
              <Ionicons name="people" size={24} color="#e0e0e0" />
              ) : (
              <Ionicons name="people" size={24} color="#0c9bfb" />
            ),
        }}
      />
      <TabBar.Screen
        name="프로필"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            !focused  ? (
              <FontAwesome name="user-circle" size={24} color="#e0e0e0" />
              ) : (
              <FontAwesome name="user-circle" size={24} color="#0c9bfb" />
            ),
        }}
      />
    </TabBar.Navigator>
  );
};

export default TabNavigator;