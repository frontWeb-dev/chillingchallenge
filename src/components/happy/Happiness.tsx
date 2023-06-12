import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import HappyStar from "./HappyStar";
import HappyText from "./HappyText";

interface HappinessProps {
  happy: string;
  setHappy: React.Dispatch<React.SetStateAction<string>>;
}

const Happiness = ({ happy, setHappy }: HappinessProps) => {
  const [happyPoint, setHappyPoint] = useState(0);

  return (
    <>
      <Wrapper>
        <HappyText happy={happy} setHappy={setHappy} />
        <HappyStar happyPoint={happyPoint} setHappyPoint={setHappyPoint} />
      </Wrapper>
    </>
  );
};

export default Happiness;

// styled
const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
