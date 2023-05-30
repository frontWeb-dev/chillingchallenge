import React from "react";
import styled from "styled-components/native";

import LongButton from "../../components/mission/LongButton";
import Margin from "../../components/Margin";

interface StartPageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  title: string;
  comment: string;
  desc: string;
  bgImage: string;
  type: number;
};  

const StartPage = ({ setMissionStatus, comment, desc }: StartPageProps) => {

  return (
    <>
      <Wrapper>
        <MissionQuote>
          "{comment}"
        </MissionQuote>
        <Margin props={50} />
        <ContentContainer>
          <SubHeader>
            챌린지 설명
          </SubHeader>
          <Description>
            {desc}
          </Description>
          <Margin props={10} />
          <SubHeader>
            챌린지 방법
          </SubHeader>
          <Description>
            {desc}
          </Description>
        </ContentContainer>
        <LongButton
          type="START"
          text="미션 시작하기"
          setMissionStatus={setMissionStatus}
        />
      </Wrapper>
    </>
  );
};

export default StartPage;


// styled
const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const MissionQuote = styled.Text`
  font-size: 18px;
  font-family: "Light";
  font-style: italic;
  color: grey;
`;

const ContentContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

const SubHeader = styled.Text`
  font-size: 16px;
  font-family: "Medium";
`;

const Description = styled.Text`
  font-size: 14px;
  font-family: "Regular";
  color: dimgrey;
  line-height: 24px;
  text-align: center;
`;