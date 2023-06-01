import React, {useState, useEffect } from "react";
import styled from "styled-components/native";

import HappyStar from "./HappyStar";

const Happiness: React.FC = () => {
  const [happyPoint, setHappyPoint] = useState(0);

  return (
    <>
      <Wrapper>
        <HappyStar
          happyPoint={happyPoint}
          setHappyPoint={setHappyPoint}
        />
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
  justify-content: center;
  align-items: center;
  gap: 15px;
`;