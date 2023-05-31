import React, { useState, useCallback } from "react";
import styled from "styled-components/native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ImageBackground, Text } from "react-native";

import { MissionNavigatorParamList } from "../../navigations/MissionNavigator";
import { missions } from "../../mocks/missions";
import { getMissionState } from "../../utils/MissionState";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Card from "../../components/Card";

export interface MissionData {
  id: number;
  title: string;
  comment: string;
  desc: string;
  bgImage: string;
  type: number;
}

type MissionState = {
  [key: number]: string;
};

const SelectScreen: React.FC = () => {

  const [missionState, setMissionState] =useState<MissionState>({});

  useFocusEffect(
    React.useCallback(() => {
      const fetchMissionState = async () => {
        const state = await getMissionState();
        if (state !== null) {
          const missionStateObj = JSON.parse(state);
          setMissionState(missionStateObj);
        }
      };
      fetchMissionState();
      return () => {
      };
    }, [])
  );


  const navigation = useNavigation<MissionNavigatorParamList>();
  const onPress = (badge: number, el: MissionData) => {
    if (badge === 3) return;
    navigation.navigate("MissionScreen", { data: el });
  };

  return (
    <Layout>
      <Header text="오늘의 칠링챌링" />
      <Container>
        {missions.map((el) => {
          const missionStateValue = parseInt(missionState[el.id]);
          const badge = missionStateValue !== undefined ? missionStateValue : 1;
          return (
            <Card
              key={el.id}
              isDone={badge === 3}
              badge={badge}
              onPress={() => onPress(badge, el)}
            >
              <ImageBackground
                source={{ uri: el.bgImage }}
                resizeMode="cover"
                style={{ flex: 1, justifyContent: "space-between" }}
              >
                <Title>{el.title}</Title>
                <Desc>{el.comment}</Desc>
              </ImageBackground>
            </Card>
        )})}
      </Container>
    </Layout>
  );
};

export default SelectScreen;

const Container = styled.View`
  padding: 30px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Desc = styled.Text`
  font-size: 14px;
`;
