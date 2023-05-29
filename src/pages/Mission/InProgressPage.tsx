import React from "react";
import styled from "styled-components/native";

import LongButton from "../../components/mission/LongButton";

interface InProgressPageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
};  

const InProgressPage = ({ setMissionStatus }: InProgressPageProps) => {

  return (
    <>
      <Wrapper>
        <MissionQuote>
          미션 진행
        </MissionQuote>
        <LongButton
          type="InProgress"
          text="인증 등록하기"
          setMissionStatus={setMissionStatus}
        />
      </Wrapper>
    </>
  );
};

export default InProgressPage;


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
  font-size: 40px;
  font-family: "ExtraBold";
`;