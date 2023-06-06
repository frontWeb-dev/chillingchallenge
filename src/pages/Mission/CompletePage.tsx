import React from "react";
import dayjs from "dayjs";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

import LongButton from "../../components/mission/LongButton";
import { useNavigation } from "@react-navigation/native";
import { MissionNavigatorParamList } from "../../navigations/MissionNavigator";
import Happiness from "../../components/happy/Happiness";
import { setAttendance } from "../../utils/Attendance";

interface CompletePageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  type: number;
}

const CompletePage = ({ setMissionStatus }: CompletePageProps) => {
  const navigation = useNavigation<MissionNavigatorParamList>();

  const handleUploadButton = () => {
    const today = dayjs();
    const formattedDate = today.format("YYYY-MM-DD");
    setAttendance(formattedDate);
    navigation.navigate("SelectScreen");
  };

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Wrapper>
          <Happiness />
          <LongButton text="업로드하기" onSubmit={() => handleUploadButton()} />
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
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;
