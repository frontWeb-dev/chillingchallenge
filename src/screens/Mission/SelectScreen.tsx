import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { MissionData } from "@mocks/missions";
import { MissionNavigatorParamList } from "@navigations/MissionNavigator";
import { loadRandomMissions } from "@utils/RandomizeMissions";
import { getMissionState } from "@utils/MissionState";

import Layout from "@components/Layout";
import Header from "@components/Header";
import Card from "@components/Card";
import { Image } from "react-native";

interface Time {
  hours: number;
  minutes: number;
}

type MissionState = {
  [key: number]: string;
};

const SelectScreen: React.FC = () => {
  const [todayMission, setTodayMission] = useState<MissionData[]>([]); // state: 랜덤화된 미션 객체를 담을 상태
  const [missionState, setMissionState] = useState<MissionState>({}); // state: 미션 완료 여부
  const [remainingTime, setRemainingTime] = useState<Time | null>(null); // state: 남은 시간
  const navigation = useNavigation<MissionNavigatorParamList>(); // navigation: 스크린 네비게이션 함수

  // 랜덤화된 미션 불러오기
  useEffect(() => {
    const loadMissions = async () => {
      const data = await loadRandomMissions();
      if (data) {
        setTodayMission([...data]);
      }
    };
    loadMissions();
  }, []);

  // 미션 상태 실시간 반영, 스크린이 포커스될 때 새롭게 반영
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
      return () => {};
    }, [])
  );

  // onPress: 미션 선택 함수
  const onPress = (badge: number, el: MissionData) => {
    if (badge === 3) return;
    navigation.navigate("MissionScreen", { data: el, badge: badge });
  };

  // 남은 시간 업데이트 함수
  const updateRemainingTime = useCallback(() => {
    const currentTime = new Date();
    const nextDay10AM = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate() + 1,
      10,
      0,
      0
    );
    const timeDiff = nextDay10AM.getTime() - currentTime.getTime();

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    setRemainingTime({ hours, minutes });
  }, []);

  // 남은 시간 실시간 반영
  useEffect(() => {
    updateRemainingTime();

    const interval = setInterval(() => {
      updateRemainingTime();
    }, 60 * 1000); // 1분 (60초)

    return () => {
      clearInterval(interval);
    };
  }, [updateRemainingTime]);

  return (
    <Layout>
      <Header text="오늘의 챌링" />
      <Container>
        {todayMission && (
          <CardContainer>
            {todayMission.map((el) => {
              const missionStateValue = parseInt(missionState[el.id]);
              const badge = missionStateValue !== undefined ? missionStateValue : 1;
              return (
                <Card
                  key={el.id}
                  isDone={badge === 3}
                  image={el.bgImage}
                  onPress={() => onPress(badge, el)}
                >
                  <ContentView isDone={badge === 3}>
                    <TitleView>
                      <Title badge={badge}>{el.title}</Title>
                      {badge === 2 && <Image source={require("@assets/progress.png")}></Image>}
                    </TitleView>

                    <Comment isDone={badge === 3}>{el.comment}</Comment>
                  </ContentView>
                </Card>
              );
            })}
          </CardContainer>
        )}
        {remainingTime ? (
          <DDate>
            미션 업데이트까지{" "}
            <Time>
              {remainingTime.hours}시간 {remainingTime.minutes}분
            </Time>{" "}
            남았어요.
          </DDate>
        ) : (
          ""
        )}
      </Container>
    </Layout>
  );
};

export default SelectScreen;

const Container = styled.View`
  flex: 1;
  padding: 30px 30px 20px 30px;
  gap: 30px;
`;

const CardContainer = styled.View`
  flex: 1;
  gap: 20px;
`;

const ContentView = styled.View<{ isDone: boolean }>`
  flex: 2;
  margin-right: 10px;
  justify-content: center;
  gap: 20px;
`;

const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Title = styled.Text<{ badge: number }>`
  font-size: 18px;
  font-family: "Bold";
  line-height: ${(props) => props.theme.font.title};
  color: ${(props) =>
    props.badge === 3
      ? "rgba(0, 0, 0, 0.2)"
      : props.badge === 2
      ? props.theme.color.green_200
      : props.theme.color.textColor};
`;

const Comment = styled.Text<{ isDone: boolean }>`
  font-size: 13px;
  line-height: ${(props) => props.theme.font.smaller};
  color: ${(props) => (props.isDone ? "rgba(0, 0, 0, 0.2)" : props.theme.color.textColor)};
`;

const DDate = styled.Text`
  text-align: center;
`;
const Time = styled.Text`
  font-family: "Bold";
`;
