import React from "react";
import { ImageURISource } from "react-native";
import styled from "styled-components/native";

interface ImageTextProps {
  text: string;
  image: ImageURISource;
}

const ImageText = ({ text, image }: ImageTextProps) => {
  return (
    <SubTitleContainer>
      <SubTitle>{text}</SubTitle>
      <SubTitleImage source={image}></SubTitleImage>
    </SubTitleContainer>
  );
};

export default ImageText;

const SubTitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 35px;
  gap: 5px;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  font-family: "Regular";
  color: #696969;
`;

const SubTitleImage = styled.Image`
  width: 24px;
  height: 24px;
  object-fit: scale-down;
`;
