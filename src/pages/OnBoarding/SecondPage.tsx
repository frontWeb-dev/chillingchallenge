import React from "react";
import styled from "styled-components/native";

import MediaContainer from "../../components/onBoarding/MediaContainer";
import Margin from "../../components/Margin";

interface SecondPageProps {
  setPageStatus: React.Dispatch<React.SetStateAction<string>>;
};  

const SecondPage = ({ setPageStatus }: SecondPageProps) => {


  return (
    <>
      <MediaContainer
        props={1}
      />
    </>
  );
};

export default SecondPage;