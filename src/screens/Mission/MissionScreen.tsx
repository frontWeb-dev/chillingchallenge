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
import ForImagePage from "@pages/Mission/ForImagePage";

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
    if (badge === 2 && type === 1) {
      setMissionStatus("ForImage");
    } else if (badge === 2) {
      setMissionStatus("InProgress");
    } else {
      setMissionStatus("Start");
    }
  }, [badge, type]);

  let pageComponent;

  switch (missionStatus) {
    case "Start":
      pageComponent = (
        <StartPage
          setMissionStatus={setMissionStatus}
          id={id}
          desc={desc}
          type={type}
          bgImage={bgImage!}
        />
      );
      break;
    case "ForImage":
      pageComponent = <ForImagePage setMissionStatus={setMissionStatus} />;
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
    <Layout color="#10b767">
      <Header text={title.replace("\n", " ")} noBack={true} color="#10b767" />
      <Margin props={20} />
      {pageComponent}
      <Margin props={30} />
    </Layout>
  );
};

export default MissionScreen;
