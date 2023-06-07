import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { loadRandomMissions } from "../utils/RandomizeMissions";

const AfterLoginSplashScreen = () => {
  const navigation = useNavigation();
  const [todayMission, setTodayMission] = useState([]);

  useEffect(() => {
    const loadMissions = async () => {
      const data: string | undefined = await loadRandomMissions();
      if (data) {
        const temp = JSON.parse(data);
        setTodayMission(temp);
        console.log(todayMission);
      }
    };
    loadMissions();
    setTimeout(() => {
      navigation.navigate("TabNavigator");
    }, 2000);
  }, []);

  return (
    <>
      <PageWrapper>
        <TempText>
          하이
        </TempText>
      </PageWrapper>
    </>
  );
};

export default AfterLoginSplashScreen;

// styled
const PageWrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SplashImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const TempText = styled.Text`
  font-size: 16px;
`;