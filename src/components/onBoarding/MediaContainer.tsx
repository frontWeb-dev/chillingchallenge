import React from "react";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

interface MediaContainerProps {
  type: number;
}

const MediaContainer = ({ type }: MediaContainerProps) => {
  let lottieComponent;

  switch (type) {
    case 1:
      lottieComponent = (
        <LottieView source={require("../../global/lottie/119418-target.json")} autoPlay loop />
      );
      break;
    case 2:
      lottieComponent = (
        <LottieView source={require("../../global/lottie/101350-challenge.json")} autoPlay loop />
      );
      break;
    case 3:
      lottieComponent = (
        <LottieView source={require("../../global/lottie/97007-gold-badge.json")} autoPlay loop />
      );
      break;
    default:
      lottieComponent = null;
  }

  return <Wrapper>{lottieComponent}</Wrapper>;
};

export default MediaContainer;

// styled
const Wrapper = styled.View`
  width: 100%;
  flex: 2;
`;
