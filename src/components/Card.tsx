import React, { useState, useEffect } from "react";
import { ImageURISource } from "react-native";
import styled from "styled-components/native";

interface CardProps {
  children: React.ReactNode;
  isDone: boolean;
  image: ImageURISource;
  onPress: () => void;
}
const Card = ({ children, isDone, image, onPress }: CardProps) => {
  const [icon, setIcon] = useState<ImageURISource>(image);

  useEffect(() => {
    if (isDone) {
      setIcon(require("@assets/illustrations/logo_0.png"));
    }
  }, [isDone]);

  return (
    <Container
      activeOpacity={0.8}
      isDone={isDone}
      onPress={onPress}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Contents>
        {children}
        <ImageView>
          <BgImage source={icon} resizeMode="contain"></BgImage>
        </ImageView>
      </Contents>
    </Container>
  );
};

export default Card;

const Container = styled.TouchableOpacity<{ isDone: boolean }>`
  position: relative;
  flex: 1;
  border-radius: 20px;
  box-shadow: 2px 2px 2px #5d5d5d;
  background-color: ${(props) => (props.isDone ? "#f5f5f8" : "#f5f5f8")};
`;

const Contents = styled.View`
  padding: 20px;
  flex: 1;
  flex-direction: row;
`;

const ImageView = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-right: 25px;
`;

const BgImage = styled.Image`
  width: 100px;
  height: 100px;
`;
