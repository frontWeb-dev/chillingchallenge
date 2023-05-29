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
      <Margin props={50} />
      <MediaContainer
        type={2}
      />
      <Margin props={30} />
      <DescriptionContainer
        headerText="프론트 잘하면 좋겠당"
        contentText={`함께 미션을 하는 사람들과
감정을 공유하고
응원을 주고 받아요.`
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