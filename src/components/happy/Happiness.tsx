import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

import HappyStar from "./HappyStar";
import HappyText from "./HappyText";

const Happiness: React.FC = () => {
  const [happyPoint, setHappyPoint] = useState(0);
  const [happyText, setHappyText] = useState("");

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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
