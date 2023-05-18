import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

import Layout from "../components/Layout";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";
import { RootNavigatorParamList } from "../navigations/RootNavigator";
import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  KakaoLogin: { screen: string } | undefined;
};

const MainScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Layout>
      <Container>
        <Title>오늘 당신의 기분은 어떠신가요?</Title>
        <Desc>당신의 이야기를 그려볼까요?</Desc>
        <Desc>'칠링 챌링'과 첫 걸음을 내딛어봐요.</Desc>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("KakaoLogin", { screen: "KakaoLogin" })}
          />
        </View>
      </Container>
    </Layout>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  margin-bottom: 20px;
  font-size: 20px;
  font-family: Light;
`;

const Desc = styled.Text`
  margin-bottom: 5px;
  font-size: 16px;
  font-family: Light;
`;

export default MainScreen;
