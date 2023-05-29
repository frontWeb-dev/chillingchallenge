import React from "react";
import styled from "styled-components/native";

interface CardProps {
  children: React.ReactNode;
  isDone: boolean;
  bedge?: string;
  onPress: () => void;
}
const Card = ({ children, isDone, bedge, onPress }: CardProps) => (
  <Container isDone={isDone} onPress={onPress}>
    {bedge && (
      <Bedge>
        <Text>{bedge}</Text>
      </Bedge>
    )}
    {children}
  </Container>
);

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

const Bedge = styled.View`
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
