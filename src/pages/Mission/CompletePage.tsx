import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

import LongButton from "../../components/mission/LongButton";
import { useNavigation } from "@react-navigation/native";
import { MissionNavigatorParamList } from "../../navigations/MissionNavigator";
import Happiness from "../../components/happy/Happiness";

interface CompletePageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  type: number;
}

const CompletePage = ({ setMissionStatus }: CompletePageProps) => {
  const navigation = useNavigation<MissionNavigatorParamList>();

  const handleUploadButton = () => {
    navigation.navigate("SelectScreen");
  };

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Wrapper>
          <MissionQuote>미션 완료</MissionQuote>
          <Happiness/>
          <LongButton
            text="업로드하기"
            onSubmit={() => navigation.navigate("SelectScreen")}
          />
        </Wrapper>
      </ScrollView>
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
