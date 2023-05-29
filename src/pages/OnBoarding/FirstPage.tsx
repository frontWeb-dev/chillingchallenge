import React from "react";
import styled from "styled-components/native";

import MediaContainer from "../../components/onBoarding/MediaContainer";
import Margin from "../../components/Margin";
import DescriptionContainer from "../../components/onBoarding/DescriptionContainer";


interface FirstPageProps {
  setPageStatus: React.Dispatch<React.SetStateAction<string>>;
};  

const FirstPage = ({ setPageStatus }: FirstPageProps) => {

  return (
    <>
      <MediaContainer
        props={1}
      />
      <Margin props={56} />
      <DescriptionContainer
        props={2}
      />
    </>
  );
};

export default FirstPage;