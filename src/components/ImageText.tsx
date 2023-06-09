import React from "react";
import { ImageURISource } from "react-native";
import styled from "styled-components/native";

interface ImageTextProps {
  text: string;
  image: ImageURISource;
}

const ImageText = ({ text, image }: ImageTextProps) => {
  return (
    <TextView>
      <Text>{text}</Text>
      <Image source={image}></Image>
    </TextView>
  );
};

export default ImageText;

const TextView = styled.View`
  padding: 0 30px;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Text = styled.Text``;

const Image = styled.Image``;
