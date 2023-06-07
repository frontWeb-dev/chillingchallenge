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
      {/* <Badge>
        <Text>{badgeText}</Text>
      </Badge> */}
      <Contents>
        {children}
        <ImageView>
          <BgImage source={image} resizeMode="contain"></BgImage>
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
`;

const BgImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const Badge = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 48px;
  padding: 4px;
  justify-content: center;
  background-color: #d6d6d6;
  border-radius: 5px;
`;

const Text = styled.Text`
  font-size: 13px;
  line-height: ${(props) => props.theme.font.smaller};
  text-align: center;
  color: ${(props) => props.theme.color.textColor};
`;
