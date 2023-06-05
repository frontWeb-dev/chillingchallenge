import React from "react";
import styled from "styled-components/native";

import LongButton from "../../components/mission/LongButton";
import Margin from "../../components/Margin";

import { setMissionState } from "../../utils/MissionState";

interface StartPageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  comment: string;
  desc: string;
  type: number;
}

const StartPage = ({ setMissionStatus, comment, desc, id }: StartPageProps) => {
  const handleStartMission = async () => {
    await setMissionState(id, 2);
    setMissionStatus("InProgress");
  };

  return (
    <>
      <Wrapper>
        <ContentContainer>
          <MissionQuote>"{comment}"</MissionQuote>
          <Description>{desc}</Description>
        </ContentContainer>
        <LongButton text="시작하기" onSubmit={handleStartMission} />
      </Wrapper>
    </>
  );
};

export default StartPage;

// styled
const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

const ContentContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const MissionQuote = styled.Text`
  font-size: 18px;
  font-family: "Light";
  font-style: italic;
  color: ${(props) => props.theme.subTextColor};
  text-align: center;
`;

const Description = styled.Text`
  font-size: 14px;
  font-family: "Regular";
  color: dimgrey;
  line-height: 24px;
  text-align: center;
`;
