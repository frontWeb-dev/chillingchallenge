import React, { useEffect, useState, useRef } from "react";
import { View, Button } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import * as Notifications from "expo-notifications";

import Layout from "@components/Layout";
import { RootNavigatorParamList } from "@navigations/RootNavigator";
import { registerForPushNotificationsAsync, sendPushNotification } from "@utils/PushNotifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = () => {
  const navigation = useNavigation<RootNavigatorParamList>(); // navigation: 스크린 네비게이션

  // 스플래시 화면이 켜지고 시간이 지나면 없어지기
  useEffect(() => {
    // AsyncStorage.clear();
    setTimeout(() => {
      navigation.navigate("TabNavigator");
    }, 3000);
  }, []);

  // 푸쉬 알림 상태
  const [expoPushToken, setExpoPushToken] = useState<any>("");
  const [notification, setNotification] = useState<Notifications.Notification | boolean | null>(
    false
  );
  const notificationListener = useRef<null | Notifications.Subscription>(null);
  const responseListener = useRef<null | Notifications.Subscription>(null);

  // 푸쉬 알림 함수
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });
    console.log(expoPushToken);
    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  return (
    <>
      <Layout>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
          <Text>Your expo push token: {expoPushToken}</Text>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text>
              Title: {notification instanceof Object && notification.request.content.title}
            </Text>
            <Text>Body: {notification instanceof Object && notification.request.content.body}</Text>
            <Text>
              Data:{" "}
              {notification instanceof Object && JSON.stringify(notification.request.content.data)}
            </Text>
          </View>
          <Button
            title="Press to Send Notification"
            onPress={async () => {
              await sendPushNotification(expoPushToken);
            }}
          />
        </View>
      </Layout>
    </>
  );
};

export default SplashScreen;

// styled
const Text = styled.Text`
  font-size: 20px;
`;
