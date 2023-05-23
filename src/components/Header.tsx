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
  flex-direction: row;
  background-color: ${(props: { theme: Theme }) => props.theme.colors.green_100};
  padding: 15px;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 24px;
  color: ${(props: { theme: Theme }) => props.theme.colors.green_200};
  font-family: ExtraBold;
`;

const TouchableArea = styled.TouchableOpacity`
  opacity: 0.8;
  padding: 6px 5px;
`;

export default Header;
