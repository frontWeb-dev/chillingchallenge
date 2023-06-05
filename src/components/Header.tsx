import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Margin from "./Margin";

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
    <>
      <Margin props={30} />
      {noBack ? (
        <HeaderView>
          <Text>{text}</Text>
        </HeaderView>
      ) : (
        <HeaderView>
          <Button activeOpacity={0.8} onPress={handleBackButton}>
            <ButtonImage source={require("../assets/BackButton.png")} />
          </Button>
          <Text>{text}</Text>
          <Container />
        </HeaderView>
      )}
    </>
  );
};

export default Header;

// styled
const HeaderView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.white};
  padding: 0px 20px;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.black};
  font-family: ExtraBold;
  line-height: 28px;
`;

const Button = styled.TouchableOpacity`
  display: flex;
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

