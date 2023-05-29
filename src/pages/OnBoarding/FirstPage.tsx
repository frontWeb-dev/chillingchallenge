import React from "react";

import MediaContainer from "../../components/onBoarding/MediaContainer";
import Margin from "../../components/Margin";
import DescriptionContainer from "../../components/onBoarding/DescriptionContainer";
import OnBoardingFooter from "../../components/onBoarding/OnBoardingFooter";


interface FirstPageProps {
  setPageStatus: React.Dispatch<React.SetStateAction<string>>;
};  

const FirstPage = ({ setPageStatus }: FirstPageProps) => {

  return (
    <>
      <MediaContainer
        props={1}
      />
      <Margin props={50} />
      <DescriptionContainer
        headerText="일일 미션 수행하기"
        contentText={`사소해 보이는 일들도
차곡차곡 해내다 보면
어느새 커다란 행복이 되어 있을 거예요.`
        }
      />
      <OnBoardingFooter
        step={1}
        setPageStatus={setPageStatus}
      />
    </>
  );
};

export default FirstPage;