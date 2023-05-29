import React, { useState } from "react";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Margin from "../../components/Margin";
import StartPage from "../../pages/Mission/StartPage";
import InProgressPage from "../../pages/Mission/InProgressPage";
import CompletePage from "../../pages/Mission/CompletePage";

const MissionScreen: React.FC = () => {
  const [missionStatus, setMissionStatus] = useState("Start");

  let pageComponent;

  switch (missionStatus) {
    case "Start":
      pageComponent = <StartPage 
        setMissionStatus={setMissionStatus}
        
      />;
      break;
    case "InProgress":
      pageComponent = <InProgressPage
        setMissionStatus={setMissionStatus}
      />;
      break;
    case "Complete":
      pageComponent = <CompletePage
        setMissionStatus={setMissionStatus}
      />;
      break;
    default:
      pageComponent = null;
  }


  return (
    <Layout>
      <Header text="Mission A"/>
      <Margin props={30}/>
      {pageComponent}
    </Layout>
  );
};

export default MissionScreen;