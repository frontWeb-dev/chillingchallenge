import React from "react";
import styled from "styled-components/native";

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
  border-radius: 18px;
  background-color: ${(props) => props.theme.color.green_200};
  padding: 14px 0;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.color.textInvertColor};
  font-size: 15px;
  line-height: ${(props) => props.theme.font.normal};
  font-family: "Bold";
  text-align: center;
  letter-spacing: 1.5px;
`;
