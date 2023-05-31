import React, { useState, useEffect } from "react";
import styled from "styled-components/native";

interface CardProps {
  children: React.ReactNode;
  isDone: boolean;
  badge: number;
  onPress: () => void;
}
const Card = ({ children, isDone, badge, onPress }: CardProps) => {
  const [ badgeText, setBadgeText ] = useState("");

  useEffect(() => {
    if (badge === 3) {
      setBadgeText("진행 완료");
    } else if (badge === 2) {
      setBadgeText("진행 중");
    } else {
      setBadgeText("시작 전")
    }
  }, [badge]);

  return (
    <Container isDone={isDone} onPress={onPress}>
      <Badge>
        <Text>{badgeText}</Text>
      </Badge>
      {children}
    </Container>
  );
};

export default Card;

const Container = styled.TouchableOpacity`
  position: relative;
  padding: 30px 20px;
  margin-bottom: 30px;
  height: 140px;
  border: 1px solid #ddd;
  border-radius: 20px;
  box-shadow: 2px 2px 2px #5d5d5d;
  background-color: ${(props: { isDone: boolean }) => (props.isDone ? "#f1f1f1" : "#fff")};
`;

const Badge = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 65px;
  height: 24px;
  justify-content: center;
  background-color: #000;
  border-radius: 50px;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
`;
