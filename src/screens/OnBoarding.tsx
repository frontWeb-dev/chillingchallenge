import React, { useState } from "react";

import FirstPage from "../pages/OnBoarding/FirstPage";
import SecondPage from "../pages/OnBoarding/SecondPage";
import ThirdPage from "../pages/OnBoarding/ThirdPage";

const OnBoardingScreen: React.FC = () => {
  const [pageStatus, setPageStatus] = useState("First");

  let pageComponent;

  switch (pageStatus) {
    case "First":
      pageComponent = <FirstPage setPageStatus={setPageStatus} />;
      break;
    case "Second":
      pageComponent = <SecondPage setPageStatus={setPageStatus} />;
      break;
    case "Third":
      pageComponent = <ThirdPage setPageStatus={setPageStatus} />;
      break;
    default:
      pageComponent = null;
  }

  return <>{pageComponent}</>;
};

export default OnBoardingScreen;
