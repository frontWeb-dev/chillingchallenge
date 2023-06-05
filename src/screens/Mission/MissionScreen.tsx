import React, { useEffect, useState } from "react";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Margin from "../../components/Margin";
import StartPage from "../../pages/Mission/StartPage";
import InProgressPage from "../../pages/Mission/InProgressPage";
import CompletePage from "../../pages/Mission/CompletePage";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MissionData } from "./SelectScreen";
import { ImageURISource } from "react-native/types";

type RootStackParamList = {
  MissionScreen: { data: MissionData };
};

const MissionScreen: React.FC = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "MissionScreen">>();

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [desc, setDesc] = useState("");
  const [method, setMethod] = useState<string | string[]>("");
  const [bgImage, setBgImage] = useState<ImageURISource>();
  const [type, setType] = useState<number>(0);

  useEffect(() => {
    setId(params?.data?.id);
    setTitle(params?.data?.title);
    setComment(params?.data?.comment);
    setDesc(params?.data?.desc);
    setMethod(params?.data?.method);
    setBgImage(params?.data?.bgImage);
    setType(params?.data?.type);
  }, [params]);

  const [missionStatus, setMissionStatus] = useState("Start");

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
