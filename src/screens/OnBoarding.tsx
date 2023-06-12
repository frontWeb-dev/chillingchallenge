import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import PagerView from "react-native-pager-view";

import Margin from "@components/Margin";
import OnBoardingFooter from "@components/onBoarding/OnBoardingFooter";
import LongButton from "@components/onBoarding/LongButton";

import StartPage from "@pages/OnBoarding/StartPage";
import FirstPage from "@pages/OnBoarding/FirstPage";
import SecondPage from "@pages/OnBoarding/SecondPage";
import ThirdPage from "@pages/OnBoarding/ThirdPage";

const OnBoardingScreen: React.FC = () => {
  const [pageStatus, setPageStatus] = useState(1);
  const [showFooter, setShowFooter] = useState(true);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const pagerRef = useRef<PagerView>(null);

  const handleStepPress = (step: number) => {
    setPageStatus(step);
    pagerRef.current?.setPage(step - 1);
    setShowFooter(step !== 4);
  };

  const handlePageSelected = (event: { nativeEvent: { position: number } }) => {
    setActivePageIndex(event.nativeEvent.position);
    setPageStatus(event.nativeEvent.position + 1);
  };

  return (
    <Wrapper>
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={handlePageSelected}
        scrollEnabled={pageStatus !== 4}
      >
        <PageWrapper key="1">
          <FirstPage
            setPageStatus={setPageStatus}
            activePageIndex={activePageIndex}
            pageIndex={0}
          />
        </PageWrapper>
        <PageWrapper key="2">
          <SecondPage
            setPageStatus={setPageStatus}
            activePageIndex={activePageIndex}
            pageIndex={1}
          />
        </PageWrapper>
        <PageWrapper key="3">
          <ThirdPage
            setPageStatus={setPageStatus}
            activePageIndex={activePageIndex}
            pageIndex={2}
          />
        </PageWrapper>
        <PageWrapper key="4">
          <StartPage pageIndex={3} activePageIndex={activePageIndex} />
        </PageWrapper>
      </PagerView>
      {showFooter && pageStatus !== 4 ? (
        <OnBoardingFooter
          step={pageStatus}
          setPageStatus={setPageStatus}
          handleStepPress={handleStepPress}
        />
      ) : (
        <ButtonWrapper>
          <LongButton />
        </ButtonWrapper>
      )}
      <Margin props={30} />
    </Wrapper>
  );
};

export default OnBoardingScreen;

// styled

const Wrapper = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.color.white};
`;

const PageWrapper = styled.View`
  flex: 1;
`;

const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`;
