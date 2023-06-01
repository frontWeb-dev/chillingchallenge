import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  text: string;
  noBack?: boolean;
}

const Header = ({ text, noBack }: HeaderProps) => {
  const navigation = useNavigation();

  const handleBackButton = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <HeaderView>
      {noBack ? (
        <Container />
      ) : (
        <Button activeOpacity={0.8} onPress={handleBackButton}>
          <Ionicons name="ios-arrow-back" size={26} color="white" />
        </Button>
      )}
      <Text>{text}</Text>
      <Container />
    </HeaderView>
  );
};

// styled
const HeaderView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.green_200};
  padding: 15px 20px;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.textInvertColor};
  font-family: ExtraBold;
`;

const Button = styled.TouchableOpacity``;

const Container = styled.View`
  width: 26px;
  height: 26px;
`;

export default Header;
