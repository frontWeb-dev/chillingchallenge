import React from "react";
import styled from "styled-components/native";

import LongButton from "../../components/mission/LongButton";
import { useNavigation } from "@react-navigation/native";
import { MissionNavigatorParamList } from "../../navigations/MissionNavigator";

interface CompletePageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  type: number;
}

const CompletePage = ({ setMissionStatus }: CompletePageProps) => {
  const navigation = useNavigation<MissionNavigatorParamList>();
  return (
    <>
      <Wrapper>
        <MissionQuote>미션 완료</MissionQuote>
        <LongButton
          text="다른 미션하러 가기"
          onSubmit={() => navigation.navigate("SelectScreen")}
        />
      </Wrapper>
    </>
  );
};

export default CompletePage;

// styled
const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const MissionQuote = styled.Text`
  font-size: 40px;
  font-family: "ExtraBold";
`;
