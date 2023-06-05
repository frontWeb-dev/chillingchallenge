import React from "react";

import MediaContainer from "../../components/onBoarding/MediaContainer";
import Margin from "../../components/Margin";
import DescriptionContainer from "../../components/onBoarding/DescriptionContainer";
import OnBoardingFooter from "../../components/onBoarding/OnBoardingFooter";

interface ThirdPageProps {
  setPageStatus: React.Dispatch<React.SetStateAction<number>>;
  activePageIndex: number;
  pageIndex: number;
};  

const ThirdPage = ({ setPageStatus, pageIndex, activePageIndex }: ThirdPageProps) => {

  return (
    <>
      <MediaContainer
        type={3}
      />
      <Margin props={30} />
      <DescriptionContainer
        headerText="활동배지 모으기"
        contentText={`챌린지를 수행할수록
모이는 배지들을 보며
활력을 얻어요.`
        }
        pageIndex={pageIndex}
        activePageIndex={activePageIndex}
      />
    </>
  );
};

export default ThirdPage;