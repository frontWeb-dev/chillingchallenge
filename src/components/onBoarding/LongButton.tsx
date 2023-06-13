import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { RootNavigatorParamList } from "@navigations/RootNavigator";

const LongButton = () => {
  const navigation = useNavigation<RootNavigatorParamList>();

  const handlePress = () => {
    navigation.navigate("LoginNavigator");
  };

  return (
    <>
      <Button onPress={handlePress}>
        <ButtonText>시작하기</ButtonText>
      </Button>
    </>
  );
};

export default LongButton;

// styled
const Button = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.green_200};
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.color.white};
  font-size: 18px;
  font-family: "Bold";
  line-height: ${(props) => props.theme.font.subtitle};
  letter-spacing: 4px;
`;
