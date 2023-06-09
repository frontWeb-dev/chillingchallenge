import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

interface HappyStarProps {
  happyPoint: number;
  setHappyPoint: React.Dispatch<React.SetStateAction<number>>;
}

const HappyStar = ({ happyPoint, setHappyPoint }: HappyStarProps) => {
  const handleStarButton = (point: number) => {
    setHappyPoint(point);
  };

  return (
    <>
      <ButtonWrapper>
        <StarContainer activeOpacity={0.8} onPress={() => handleStarButton(1)}>
          {happyPoint >= 1 ? (
            <AntDesign name="star" size={30} color="gold" />
          ) : (
            <AntDesign name="staro" size={30} color="gray" />
          )}
        </StarContainer>
        <StarContainer activeOpacity={0.8} onPress={() => handleStarButton(2)}>
          {happyPoint >= 2 ? (
            <AntDesign name="star" size={30} color="gold" />
          ) : (
            <AntDesign name="staro" size={30} color="gray" />
          )}
        </StarContainer>
        <StarContainer activeOpacity={0.8} onPress={() => handleStarButton(3)}>
          {happyPoint >= 3 ? (
            <AntDesign name="star" size={30} color="gold" />
          ) : (
            <AntDesign name="staro" size={30} color="gray" />
          )}
        </StarContainer>
        <StarContainer activeOpacity={0.8} onPress={() => handleStarButton(4)}>
          {happyPoint >= 4 ? (
            <AntDesign name="star" size={30} color="gold" />
          ) : (
            <AntDesign name="staro" size={30} color="gray" />
          )}
        </StarContainer>
        <StarContainer activeOpacity={0.8} onPress={() => handleStarButton(5)}>
          {happyPoint >= 5 ? (
            <AntDesign name="star" size={30} color="gold" />
          ) : (
            <AntDesign name="staro" size={30} color="gray" />
          )}
        </StarContainer>
      </ButtonWrapper>
    </>
  );
};

export default HappyStar;

// styled
const ButtonWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;

const StarContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
