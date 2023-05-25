import React from "react";
import styled, {css} from "styled-components/native";

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

interface UserButtonProps {
  isSelected: number;
  setIsSelected: React.Dispatch<React.SetStateAction<number>>;
};  

const UserButton = ({ isSelected, setIsSelected }: UserButtonProps) => {

  return (
    <>
      <ButtonListContainer>
        <ButtonContainer
          onPress={() => setIsSelected(1)}
          isSelected={isSelected === 1}
        >
          <MaterialCommunityIcons name="leaf" size={50} color={isSelected === 1 ? "#FFFFFF" : "#47AF51"} />
          <ButtonText>
            배지 보기
          </ButtonText>
        </ButtonContainer>
        <ButtonContainer
          onPress={() => setIsSelected(2)}
          isSelected={isSelected === 2}
        >
        <MaterialCommunityIcons name="clipboard-check-outline" size={50} color={isSelected === 2 ? "#FFFFFF" : "#47AF51"} />
          <ButtonText>
            나의 챌링
          </ButtonText>
        </ButtonContainer>
        <ButtonContainer
          onPress={() => setIsSelected(3)}
          isSelected={isSelected === 3}
        >
          <Ionicons name="calendar" size={50} color={isSelected === 3 ? "#FFFFFF" : "#47AF51"} />
          <ButtonText>
            출석 확인
          </ButtonText>
        </ButtonContainer>
      </ButtonListContainer>
    </>
  )
};

export default UserButton;

// styled
const ButtonListContainer = styled.View`
  width: 100%;
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`;

const ButtonContainer = styled.TouchableOpacity<{ isSelected: boolean }>`
  activeOpacity: 0.8;
  display: flex;
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
  padding: 5px;
  width: 95px;
  height: 95px;
  border: 0.5px solid #909090;
  borderRadius: 20px;
  gap: 5px;
  ${(props) =>
    props.isSelected &&
    css`
      background-color: #6EBE75;
    `}
`;

const ButtonText = styled.Text`
  fontSize: 13px;
  fontFamily: "Medium";
`;