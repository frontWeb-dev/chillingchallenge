import React from "react";
import styled from "styled-components/native";

interface MediaContainerProps {
  props: number;
}

const MediaContainer = ({ props }: MediaContainerProps) => {
  return <Wrapper></Wrapper>;
};

export default MediaContainer;

// styled
const Wrapper = styled.View`
  width: 100%;
  flex: 3;
  // height: 425px;
  background-color: lightgrey;
  border: 1px solid lightgrey;
`;
