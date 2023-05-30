import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { MissionNavigatorParamList } from "../../navigations/MissionNavigator";

interface LongButtonProps {
  type: string;
  text: string;
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  onSubmit?: () => void;
}

const LongButton = ({ text, type, setMissionStatus, onSubmit }: LongButtonProps) => {
  const navigation = useNavigation<MissionNavigatorParamList>();

  // const handleOnPress = () => {
  //   switch (type) {
  //     case "START":
  //       setMissionStatus("InProgress");
  //       break;
  //     case "InProgress":
  //       setMissionStatus("Complete");
  //       break;
  //     case "Complete":
  //       navigation.navigate("SelectScreen");
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <ButtonContainer onPress={onSubmit}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default LongButton;

// styled

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  border-radius: 12px;
  background-color: black;
  padding: 10px 0;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: "Bold";
  text-align: center;
`;
