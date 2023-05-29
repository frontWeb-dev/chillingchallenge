import React from "react";

import MediaContainer from "../../components/onBoarding/MediaContainer";
import Margin from "../../components/Margin";
import DescriptionContainer from "../../components/onBoarding/DescriptionContainer";
import OnBoardingFooter from "../../components/onBoarding/OnBoardingFooter";

interface ThirdPageProps {
  setPageStatus: React.Dispatch<React.SetStateAction<string>>;
};  

const ThirdPage = ({ setPageStatus }: ThirdPageProps) => {


  return (
    <>
      <Margin props={50} />
      <MediaContainer
        type={3}
      />
      <Margin props={30} />
      <DescriptionContainer
        headerText="활동배지 모으기"
        contentText={`미션을 수행할수록
모이는 배지들을 보며
활력을 얻어요.`
        }
      />
      <OnBoardingFooter
        step={3}
        setPageStatus={setPageStatus}
      />
    </>
  );
};

export default ThirdPage;