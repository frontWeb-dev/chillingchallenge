import React from "react";
import styled, { css } from "styled-components/native";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

interface UserButtonProps {
  isSelected: number;
  setIsSelected: React.Dispatch<React.SetStateAction<number>>;
}

const UserButton = ({ isSelected, setIsSelected }: UserButtonProps) => {
  return (
    <>
      <ButtonListContainer>
        <ButtonContainer onPress={() => setIsSelected(3)} isSelected={isSelected === 3}>
          <Ionicons name="calendar" size={30} color={isSelected === 3 ? "#6ebe75" : "#c2c2c2"} />
          <ButtonText>출석 확인</ButtonText>
        </ButtonContainer>
        <ButtonContainer
          activeOpacity={0.8}
          onPress={() => setIsSelected(1)}
          isSelected={isSelected === 1}
        >
          <MaterialCommunityIcons
            name="leaf"
            size={30}
            color={isSelected === 1 ? "#6ebe75" : "#c2c2c2"}
          />
          <ButtonText>배지 보기</ButtonText>
        </ButtonContainer>
        <ButtonContainer onPress={() => setIsSelected(2)} isSelected={isSelected === 2}>
          <MaterialCommunityIcons
            name="tree"
            size={30}
            color={isSelected === 2 ? "#6ebe75" : "#c2c2c2"}
          />
          <ButtonText>나무 보기</ButtonText>
        </ButtonContainer>
      </ButtonListContainer>
    </>
  );
};

export default UserButton;

// styled
const ButtonListContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.TouchableOpacity<{ isSelected: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 30%;
  height: 50px;
  gap: 5px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => (props.isSelected ? "#6ebe75" : "#fff")};
`;

const ButtonText = styled.Text`
  font-size: 13px;
  font-family: "Medium";
`;
