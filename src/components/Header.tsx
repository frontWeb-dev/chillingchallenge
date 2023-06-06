import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
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
      <Margin props={30} />
      <HeaderView color={color}>
        {noBack && (
          <Button activeOpacity={0.8} onPress={handleBackButton}>
            <ButtonImage source={require("../assets/BackButton.png")} />
          </Button>
        )}
        <Text>{text}</Text>
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
  padding: 0px 20px;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
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
`;

const Container = styled.View`
  width: 26px;
  height: 26px;
`;

const ButtonImage = styled.Image`
  width: 26px;
  height: 26px;
`;
