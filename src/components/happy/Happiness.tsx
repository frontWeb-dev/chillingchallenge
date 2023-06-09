import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import HappyStar from "./HappyStar";
import HappyText from "./HappyText";

interface HappyTextProps {
  happyText: string;
  setHappyText: React.Dispatch<React.SetStateAction<string>>;
}

const Happiness = ({ happyText, setHappyText }: HappyTextProps) => {
  const [happyPoint, setHappyPoint] = useState(0);

  return (
    <>
      <Wrapper>
        <HappyText happyText={happyText} setHappyText={setHappyText} />
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
