import React from "react";
import styled from "styled-components/native";
import DescriptionContainer from "@components/onBoarding/DescriptionContainer";
import MediaContainer from "@components/onBoarding/MediaContainer";

interface StartPageProps {
  activePageIndex: number;
  pageIndex: number;
}

const StartPage = ({ pageIndex, activePageIndex }: StartPageProps) => {
  return (
    <PageContainer>
      <MediaContainer type={4} />
      <DescriptionContainer
        headerText="준비되셨나요?"
        contentText={`바쁜 일상 속에서
지친 나의 마음 돌아보기,
칠링챌링과 함께 해요.`}
        activePageIndex={activePageIndex}
        pageIndex={pageIndex}
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
