import React from "react";
import styled from "styled-components/native";

interface LongButtonProps {
  text: string;
  onSubmit?: () => void;
  small?: boolean;
}

const LongButton = ({ text, onSubmit, small = false }: LongButtonProps) => {
  return (
    <Wrapper>
      <ButtonContainer activeOpacity={0.8} onPress={onSubmit} small={small}>
        <ButtonText>{text}</ButtonText>
      </ButtonContainer>
    </Wrapper>
  );
};

export default LongButton;

// styled

const Wrapper = styled.View`
  width: 100%;
  padding: 0 20px;
`;

const ButtonContainer = styled.TouchableOpacity<{ small: boolean }>`
  width: 100%;
  border-radius: 14px;
  background-color: ${(props) => props.theme.color.green_200};
  padding: ${(props) => (props.small ? "10px 0" : "14px 0")};
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.color.textInvertColor};
  font-size: 18px;
  line-height: ${(props) => props.theme.font.subtitle};
  font-family: "Bold";
  text-align: center;
  letter-spacing: 1.5px;
`;
