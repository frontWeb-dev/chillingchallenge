import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ref, set } from "@firebase/database"; // 백 서버가 성공하면 주석처리

import { database } from "../../../firebaseConfig"; // 백 주석처리
import { useImageStore, useLongTextStore } from "@store/store";
import { MissionNavigatorParamList } from "@navigations/MissionNavigator";
import { setMissionState } from "@utils/MissionState";
import { setAttendance } from "@utils/Attendance";
import LongButton from "@components/mission/LongButton";
import Happiness from "@components/happy/Happiness";

interface CompletePageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  type: number;
}

const CompletePage = ({ id, type }: CompletePageProps) => {
  const [data, setData] = useState([]);
  const navigation = useNavigation<MissionNavigatorParamList>(); // navigation: 미션 등록 성공 후네비게이션
  const [loading, setLoading] = useState(true);
  const [happyText, setHappyText] = useState("");
  const { uri, addUri, clearUri } = useImageStore(); // 이미지 uri 전역 상태 저장
  const { texts, addTexts, clearTexts } = useLongTextStore(); //  텍스트 전역 상태 저장

  // 미션 등록 함수
  const postData = async (key: any) => {
    const data: string[] = ["김뽀삐"];
    if (type === 1) {
      data.push(uri);
      data.push(Date().toLocaleString());
    } else {
      data.push(JSON.stringify(texts));
      data.push(Date().toLocaleString());
    }
    await set(ref(database, "mission/" + key.toString()), data);
  };

  // 업로드 버튼 함수
  const handleUploadButton = async () => {
    setLoading(false);
    handleUpload();
  };

  const handleUpload = async () => {
    // 미션 DB 저장
    const result = await postData(Date.now());
    console.log(result);

    // 출석 관련 상태 저장
    const today = dayjs();
    const formattedDate = today.format("YYYY-MM-DD");
    await setAttendance(formattedDate);

    // 미션 완료 여부 상태 저장
    await setMissionState(id, 3);

    // 미션 선택 스크린으로 이동
    navigation.navigate("SelectScreen");
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
