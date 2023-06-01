import React from "react";
import styled, {css} from "styled-components/native";

import { MaterialCommunityIcons, Ionicons, Entypo, } from '@expo/vector-icons';

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
        <Entypo name="tree" size={50} color={isSelected === 2 ? "#FFFFFF" : "#47AF51"} />
          <ButtonText>
            나무 보기
          </ButtonText>
        </ButtonContainer>
        <ButtonContainer
          onPress={() => setIsSelected(3)}
          isSelected={isSelected === 3}
          lastChild
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
  justifyContent: center;
  alignItems: center;
  border-width: 0.5px;
  border-color: #909090;
  border-radius: 20px;
  overflow: hidden;
`;

const ButtonContainer = styled.TouchableOpacity`
  activeOpacity: 0.8;
  display: flex;
  flexDirection: column;
  justifyContent: center;
  alignItems: center;
  padding: 5px;
  width: 33.3333%;
  height: 95px;
  gap: 5px;
  ${(props: { isSelected: boolean; }) =>
    props.isSelected &&
    css`
      background-color: #6EBE75;
    `}
  borderRightWidth: 0.5;
  borderRightColor: #909090;
  ${(props: {lastChild: boolean}) =>
    props.lastChild &&
    css`
      border-right-width: 0;
  `}
`;

const ButtonText = styled.Text`
  fontSize: 13px;
  fontFamily: "Medium";
`;