import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { MissionNavigatorParamList } from "../../navigations/MissionNavigator";

interface LongButtonProps {
  text: string;
  onSubmit?: () => void;
}

const LongButton = ({ text, onSubmit }: LongButtonProps) => {
  return (
    <ButtonContainer activeOpacity={0.8} onPress={onSubmit}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default LongButton;

// styled

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  border-radius: 12px;
  background-color: black;
  padding: 10px 0;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.textInvertColor};
  font-size: 18px;
  font-family: "Bold";
  text-align: center;
`;
