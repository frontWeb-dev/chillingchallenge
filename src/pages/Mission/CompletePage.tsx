import React from "react";
import styled from "styled-components/native";

import LongButton from "../../components/mission/LongButton";

interface CompletePageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  title: string;
  comment: string;
  desc: string;
  bgImage: string;
  type: number;
};  

const CompletePage = ({ setMissionStatus }: CompletePageProps) => {

  return (
    <>
      <Wrapper>
        <MissionQuote>
          미션 완료
        </MissionQuote>
        <LongButton
          type="Complete"
          text="다른 미션하러 가기"
          setMissionStatus={setMissionStatus}
        />
      </Wrapper>
    </>
  );
};

export default CompletePage;


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