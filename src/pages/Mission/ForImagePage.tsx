import React from "react";
import styled from "styled-components/native";

import DotAnimation from "@components/mission/DotAnimation";
import LongButton from "@components/mission/LongButton";
import Margin from "@components/Margin";

interface ForImagePageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
}

const ForImagePage = ({ setMissionStatus }: ForImagePageProps) => {
  const handleButton = () => {
    setMissionStatus("InProgress");
  };

  return (
    <>
      <Wrapper>
        <ContentContainer>
          <Title>챌린지 시작!</Title>
          <Description>챌린지를 끝마치면 인증하러 오세요!</Description>
        </ContentContainer>
        <ImageContainer>
          <Image source={require("@assets/ImageMission.png")} />
        </ImageContainer>
        <Margin props={30} />
        <DotAnimation />
        <Margin props={30} />
        <LongButton text="인증하러 가기" onSubmit={handleButton} />
      </Wrapper>
    </>
  );
};

export default ForImagePage;

// styled
const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  margin-top: 30px;
`;

const ImageContainer = styled.View`
  height: 300px;
`;

const Image = styled.Image`
  width: 300px;
  height: 300px;
  object-fit: contain;
`;

const ContentContainer = styled.View`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Description = styled.Text`
  font-size: 16px;
  font-family: "Regular";
  color: dimgrey;
  line-height: ${(props) => props.theme.font.normal};
  text-align: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-family: "Bold";
  color: ${(props) => props.theme.color.green_200};
  line-height: ${(props) => props.theme.font.title};
`;
