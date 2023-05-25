import React from "react";
import styled from "styled-components/native";
import { Theme } from "../theme";

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <HeaderView>
      <Text>{text}</Text>
    </HeaderView>
  );
};

// styled
const HeaderView = styled.View`
  width: 100%;
  display: flex;
  flexDirection: row;
  backgroundColor: ${(props: { theme: Theme }) => props.theme.colors.green_200};
  padding: 15px;
  justifyContent: space-between;
  alignItems: center;
`;

const Text = styled.Text`
  fontSize: 24px;
  color: ${(props: { theme: Theme }) => props.theme.colors.white};
  fontFamily: ExtraBold;
`;

const TouchableArea = styled.TouchableOpacity`
  opacity: 0.8;
  padding: 6px 5px;
`;

export default Header;
