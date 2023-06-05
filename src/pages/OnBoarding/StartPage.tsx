import React from "react";
import styled from "styled-components/native";

import MediaContainer from "../../components/onBoarding/MediaContainer";
import DescriptionContainer from "../../components/onBoarding/DescriptionContainer";

const StartPage = () => {

  return (
    <PageContainer>
      <MediaContainer
        type={1}
      />
      <DescriptionContainer
        headerText="준비되셨나요?"
        contentText={`바쁜 일상 속에서
지친 나의 마음 돌아보기,
칠링챌링과 함께 해요.`
        }
      />
    </PageContainer>
  );
};

export default StartPage;

// styled
const PageContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;