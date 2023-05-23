import React from "react";
import styled from "styled-components/native";

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <HeaderView>
      <Text>{text}</Text>
    </HeaderView>
  )
};

// styled
const HeaderView = styled.View`
  width: 100%;
  display: flex;
  flexDirection: row;
  backgroundColor: ${props => props.theme["green_100"]};
  paddingVertical: 15;
  paddingHorizontal: 15;
  justifyContent: space-between;
  alignItems: center;
`;

const Text = styled.Text`
  fontSize: 24;
  color: ${props => props.theme["green_200"]};
  fontFamily: ExtraBold;
`;

const TouchableArea = styled.TouchableOpacity`
  activeOpacity: 0.8;
  paddingHorizontal: 6;
  paddingVertical: 5;
`;

export default Header;