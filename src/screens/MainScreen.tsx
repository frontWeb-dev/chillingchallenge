import React from "react";
import { View, Button, Platform } from "react-native";

import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";
import { NavigationProp } from "@react-navigation/native";

import Layout from "@components/Layout";

export type RootStackParamList = {
  KakaoLogin: { screen: string } | undefined;
};

const MainScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Layout>
      {Platform.OS === "web" ? (
        <Container>
          <Title>Loading...</Title>
        </Container>
      ) : (
        <Container>
          <Title>오늘 당신의 기분은 어떠신가요?</Title>
          <Desc>당신의 이야기를 그려볼까요?</Desc>
          <Desc>'칠링 챌링'과 첫 걸음을 내딛어봐요.</Desc>
          <View>
            <Button
              title="카카오"
              onPress={() => navigation.navigate("KakaoLogin", { screen: "KakaoLogin" })}
            />
          </View>
        </Container>
      )}
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
