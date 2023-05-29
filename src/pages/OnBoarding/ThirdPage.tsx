import React from "react";
import styled from "styled-components/native";

import MediaContainer from "../../components/onBoarding/MediaContainer";
import Margin from "../../components/Margin";

interface ThirdPageProps {
  setPageStatus: React.Dispatch<React.SetStateAction<string>>;
};  

const ThirdPage = ({ setPageStatus }: ThirdPageProps) => {


  return (
    <>
      <MediaContainer
        props={1}
      />
    </>
  );
};

export default ThirdPage;