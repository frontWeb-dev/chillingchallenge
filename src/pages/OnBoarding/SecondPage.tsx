import React from "react";

import MediaContainer from "../../components/onBoarding/MediaContainer";
import Margin from "../../components/Margin";
import DescriptionContainer from "../../components/onBoarding/DescriptionContainer";
import OnBoardingFooter from "../../components/onBoarding/OnBoardingFooter";

interface SecondPageProps {
  setPageStatus: React.Dispatch<React.SetStateAction<string>>;
};  

const SecondPage = ({ setPageStatus }: SecondPageProps) => {


  return (
    <>
      <MediaContainer
        type={2}
      />
      <Margin props={30} />
      <DescriptionContainer
        headerText="일일 챌린지 수행하기"
        contentText={`하루 세 번,
사소해 보이는 일들도
차곡차곡 해내다 보면
어느새 커다란 행복이 되어 있을 거예요.`
        }
      />
      <OnBoardingFooter
        step={2}
        setPageStatus={setPageStatus}
      />
    </>
  );
};

export default SecondPage;