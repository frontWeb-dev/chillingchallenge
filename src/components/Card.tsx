import React, { useState, useEffect } from "react";
import { ImageURISource } from "react-native";
import styled from "styled-components/native";

interface CardProps {
  children: React.ReactNode;
  isDone: boolean;
  badge: number;
  image: ImageURISource;
  onPress: () => void;
}
const Card = ({ children, isDone, badge, image, onPress }: CardProps) => {
  const [badgeText, setBadgeText] = useState("");

  useEffect(() => {
    if (badge === 3) {
      setBadgeText("진행 완료");
    } else if (badge === 2) {
      setBadgeText("진행 중");
    } else {
      setBadgeText("");
    }
  }, [badge]);

  return (
    <Container activeOpacity={0.8} isDone={isDone} onPress={onPress}>
      {children}
      <ImageView>
        <BgView>
          <BgImage source={image} resizeMode="cover"></BgImage>
        </BgView>
        <Badge>
          <Text>{badgeText}</Text>
        </Badge>
      </ImageView>
    </Container>
  );
};

export default Card;

const Container = styled.TouchableOpacity<{ isDone: boolean }>`
  position: relative;
  padding: 20px;
  flex: 1;
  flex-direction: row;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
  box-shadow: 2px 2px 2px #5d5d5d;
  background-color: ${(props) => (props.isDone ? "#f1f1f1" : "#fff")};
`;

const ImageView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const BgView = styled.View`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #d6d6d6;
`;

const BgImage = styled.Image`
  left: 20px;
  width: 90%;
  height: 40px;
  object-fit: contain;
`;

const Badge = styled.View`
  width: 48px;
  padding: 4px;
  justify-content: center;
  background-color: #d6d6d6;
  border-radius: 5px;
`;

const Text = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 12px;
  text-align: center;
`;
