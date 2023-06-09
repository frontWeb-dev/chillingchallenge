import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Margin from "./Margin";

interface HeaderProps {
  text: string;
  color?: string;
  noBack?: boolean;
}

const Header = ({ text, color, noBack = false }: HeaderProps) => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <>
      <HeaderView color={color}>
        {noBack && (
          <Button activeOpacity={0.8} onPress={handleBackButton}>
            <ButtonImage source={require("../assets/BackButton.png")} />
          </Button>
        )}
        <Text color={color}>{text}</Text>
        <Container />
      </HeaderView>
    </>
  );
};

export default Header;

// styled
const HeaderView = styled.View<{ color?: string }>`
  width: 100%;
  flex-direction: row;
  background-color: ${(props) => props.color || props.theme.color.white};
  padding: 0px 35px;
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;

const Text = styled.Text<{ color?: string }>`
  font-size: 24px;
  color: ${(props) => (props.color ? props.theme.color.white : props.theme.color.black)};
  font-family: "Bold";
  line-height: ${(props) => props.theme.font.title};
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: translateX(-15px);
`;

const Container = styled.View`
  width: 26px;
  height: 26px;
`;

const ButtonImage = styled.Image`
  width: 26px;
  height: 26px;
`;
