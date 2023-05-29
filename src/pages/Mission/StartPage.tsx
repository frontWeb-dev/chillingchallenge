import React from "react";
import styled from "styled-components/native";

import LongButton from "../../components/mission/LongButton";

interface StartPageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
};  

const StartPage = ({ setMissionStatus }: StartPageProps) => {


  return (
    <>
      <Wrapper>
        <MissionQuote>
          미션 시작
        </MissionQuote>
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
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
`;

const MissionQuote = styled.Text`
  font-size: 40px;
  font-family: "ExtraBold";
`;