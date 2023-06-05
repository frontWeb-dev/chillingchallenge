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
        <ButtonContainer
          activeOpacity={0.8}
          onPress={() => setIsSelected(1)}
          isSelected={isSelected === 1}
        >
          <MaterialCommunityIcons
            name="leaf"
            size={50}
            color={isSelected === 1 ? "#FFFFFF" : "#47AF51"}
          />
          <ButtonText>배지 보기</ButtonText>
        </ButtonContainer>
        <ButtonContainer onPress={() => setIsSelected(2)} isSelected={isSelected === 2}>
          <MaterialCommunityIcons
            name="clipboard-check-outline"
            size={50}
            color={isSelected === 2 ? "#FFFFFF" : "#47AF51"}
          />
          <ButtonText>나의 챌링</ButtonText>
        </ButtonContainer>
        <ButtonContainer onPress={() => setIsSelected(3)} isSelected={isSelected === 3}>
          <Ionicons name="calendar" size={50} color={isSelected === 3 ? "#FFFFFF" : "#47AF51"} />
          <ButtonText>출석 확인</ButtonText>
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

const ButtonContainer = styled.TouchableOpacity<{isSelected:boolean}>`
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 33.3333%;
  height: 95px;
  gap: 5px;
  ${(props) =>
    props.isSelected &&
    css`
      background-color: #6ebe75;
    `}
  border-right-width: 0.5;
`;

const ButtonText = styled.Text`
  font-size: 13px;
  font-family: "Medium";
`;
