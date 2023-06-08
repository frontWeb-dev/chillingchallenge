import React, { useEffect, useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";

import { MissionData } from "@mocks/missions";
import { ImageURISource } from "react-native";

import StartPage from "@pages/Mission/StartPage";
import InProgressPage from "@pages/Mission/InProgressPage";
import CompletePage from "@pages/Mission/CompletePage";

import Layout from "@components/Layout";
import Header from "@components/Header";
import Margin from "@components/Margin";

type RootStackParamList = {
  MissionScreen: { data: MissionData; badge: number };
};

const MissionScreen: React.FC = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "MissionScreen">>();
  const { data, badge } = params;

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [desc, setDesc] = useState("");
  const [method, setMethod] = useState<string | string[]>("");
  const [bgImage, setBgImage] = useState<ImageURISource>();
  const [type, setType] = useState<number>(0);
  const [missionStatus, setMissionStatus] = useState("Start");

  useEffect(() => {
    setId(data?.id);
    setTitle(data?.title);
    setComment(data?.comment);
    setDesc(data?.desc);
    setMethod(data?.method);
    setBgImage(data?.bgImage);
    setType(data?.type);
  }, [data]);

  // 진행 중 상태일때는 미션 시작 화면 건너 뜀
  useEffect(() => {
    console.log(badge);
    badge === 2 ? setMissionStatus("InProgress") : null;
  }, [badge]);

  let pageComponent;

  switch (missionStatus) {
    case "Start":
      pageComponent = (
        <StartPage
          setMissionStatus={setMissionStatus}
          id={id}
          comment={comment}
          desc={desc}
          type={type}
        />
      );
      break;
    case "InProgress":
      pageComponent = (
        <InProgressPage
          setMissionStatus={setMissionStatus}
          id={id}
          comment={comment}
          method={method}
          type={type}
        />
      );
      break;
    case "Complete":
      pageComponent = <CompletePage setMissionStatus={setMissionStatus} id={id} type={type} />;
      break;
    default:
      pageComponent = null;
  }

  return (
    <Layout>
      <Header text={title.replace("\n", "")} />
      <Margin props={30} />
      {pageComponent}
      <Margin props={30} />
    </Layout>
  );
};

export default MissionScreen;
