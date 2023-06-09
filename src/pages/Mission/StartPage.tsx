import React from "react";
import styled from "styled-components/native";

import LongButton from "@components/mission/LongButton";
import { setMissionState } from "@utils/MissionState";
import { ImageURISource, ScrollView } from "react-native";

interface StartPageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  comment: string;
  desc: string;
  type: number;
  bgImage: ImageURISource;
}

const StartPage = ({ setMissionStatus, comment, desc, id, bgImage }: StartPageProps) => {
  const handleStartMission = async () => {
    await setMissionState(id, 2);
    setMissionStatus("InProgress");
  };

  return (
    <Wrapper>
      <ImageContainer>
        <Image source={bgImage} />
      </ImageContainer>
      <ContentContainer>
        <Description>{desc}</Description>
      </ContentContainer>
      <LongButton text="시작하기" onSubmit={handleStartMission} />
    </Wrapper>
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

const ImageContainer = styled.View`
  margin-bottom: 20px;
  height: 230px;
`;

const Image = styled.Image`
  width: 250px;
  height: 100%;
  object-fit: contain;
`;

const ContentContainer = styled.View`
  margin-bottom: 30px;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Description = styled.Text`
  font-size: 16px;
  font-family: "Regular";
  color: dimgrey;
  line-height: ${(props) => props.theme.font.normal};
  text-align: center;
`;
