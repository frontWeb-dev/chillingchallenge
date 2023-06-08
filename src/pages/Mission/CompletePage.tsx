import React from "react";
import dayjs from "dayjs";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import { MissionNavigatorParamList } from "@navigations/MissionNavigator";
import { setAttendance } from "@utils/Attendance";
import Happiness from "@components/happy/Happiness";
import LongButton from "@components/mission/LongButton";
import { setMissionState } from "@utils/MissionState";

interface CompletePageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  type: number;
}

const CompletePage = ({ id }: CompletePageProps) => {
  const navigation = useNavigation<MissionNavigatorParamList>();

  const handleUploadButton = async () => {
    const today = dayjs();
    const formattedDate = today.format("YYYY-MM-DD");
    setAttendance(formattedDate);
    await setMissionState(id, 3);
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
