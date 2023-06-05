import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

interface MediaContainerProps {
  type: number;
}

const MediaContainer = ({ type }: MediaContainerProps) => {
  let mediaComponent;

  switch (type) {
    case 1:
      mediaComponent = (
        <ImageContainer>
          <MediaImage source={require("../../assets/onBoardingFirst.png")} />
        </ImageContainer>
      );
      break;
    case 2:
      mediaComponent = (
        <ImageContainer>
          <MediaImage source={require("../../assets/onBoardingSecond.png")} />
        </ImageContainer>
      );
      break;
    case 3:
      mediaComponent = (
        <ImageContainer>
          <MediaImage source={require("../../assets/onBoardingSecond.png")} />
        </ImageContainer>
      );
      break;
    default:
      mediaComponent = null;
  }

  return (
    <Wrapper>
      {mediaComponent}
    </Wrapper>
  );
};

export default MediaContainer;

// styled
const Wrapper = styled.View`
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  background-color: ${(props) => props.theme.color.white};
`;

const ImageContainer = styled.View`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MediaImage = styled.Image`
  width: 300px;
  height: 300px;
  object-fit: scale-down;
`;
