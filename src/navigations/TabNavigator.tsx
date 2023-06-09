import React from "react";
import styled from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons, FontAwesome } from "@expo/vector-icons";

import MissionNavigator from "./MissionNavigator";
import FeedNavigator from "./FeedNavigator";
import UserNavigator from "./UserNavigator";

const TabBar = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <TabBar.Navigator screenOptions={{ tabBarStyle: { padding: 10 } }}>
      <TabBar.Screen
        name="오늘의 챌링"
        component={MissionNavigator}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#10b767",
          },
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <FontAwesome5 name="running" size={24} color="#cbe7d9" />
            ) : (
              <FontAwesome5 name="running" size={24} color="#10b767" />
            ),
        }}
      />
      <TabBar.Screen
        name="나의 칠링"
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#10b767",
          },
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <TabIconImage source={require("@assets/tabIconWhite.png")} />
            ) : (
              <TabIconImage source={require("@assets/tabIcon.png")} />
            ),
        }}
      />
      <TabBar.Screen
        name="마이페이지"
        component={UserNavigator}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            color: "#10b767",
          },
          tabBarIcon: ({ focused }) =>
            !focused ? (
              <FontAwesome name="user-circle" size={24} color="#cbe7d9" />
            ) : (
              <FontAwesome name="user-circle" size={24} color="#10b767" />
            ),
        }}
      />
    </TabBar.Navigator>
  );
};

export default TabNavigator;

// styled
const TabIconImage = styled.Image`
  width: 32px;
  height: 32px;
  object-fit: scale-down;
`;
