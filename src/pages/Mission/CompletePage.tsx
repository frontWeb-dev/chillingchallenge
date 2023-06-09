import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import { MissionNavigatorParamList } from "@navigations/MissionNavigator";
import { setAttendance } from "@utils/Attendance";
import Happiness from "@components/happy/Happiness";
import LongButton from "@components/mission/LongButton";
import { setMissionState } from "@utils/MissionState";
import { useLongTextStore } from "@store/store";
import axios from "axios";

interface CompletePageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  type: number;
}

const CompletePage = ({ id, type }: CompletePageProps) => {
  const navigation = useNavigation<MissionNavigatorParamList>();
  const [loading, setLoading] = useState(true);
  const [happyText, setHappyText] = useState("");
  const { texts, addTexts, clearTexts } = useLongTextStore();

  const handleUploadButton = async () => {
    setLoading(false);
    handleUpload();
  };

  const handleUpload = async () => {
    const today = dayjs();
    const formattedDate = today.format("YYYY-MM-DD");
    setAttendance(formattedDate);
    await setMissionState(id, 3);
  };

  const postText = async () => {
    const body = [
      {
        missionId: id,
        missionType: type,
        stringAndPath: texts,
        usercode: 5,
      },
    ];

    try {
      const url = `http://ec2-3-37-214-191.ap-northeast-2.compute.amazonaws.com:8080/completeMission`;
      const response = await axios.post(url, body);
      console.log(response.data);
      clearTexts();
      navigation.navigate("SelectScreen");
    } catch (error) {
      console.log(error);
      clearTexts();
    }
  };

  useEffect(() => {
    if (!loading) addTexts(happyText);
  }, [loading]);

  useEffect(() => {
    if (!loading) postText();
  }, [texts]);

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Wrapper>
          <Happiness setHappyText={setHappyText} happyText={happyText} />
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
