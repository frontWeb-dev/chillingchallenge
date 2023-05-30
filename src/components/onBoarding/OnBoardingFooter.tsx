import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { RootNavigatorParamList } from "../../navigations/RootNavigator";

interface OnBoardingFooterProps {
  step: number;
  setPageStatus: React.Dispatch<React.SetStateAction<string>>;
}

const OnBoardingFooter = ({ step, setPageStatus }: OnBoardingFooterProps) => {
  const navigation = useNavigation<RootNavigatorParamList>();

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonEnabled(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleSkipButton = () => {
    switch (step) {
      case 1:
        navigation.navigate("TabNavigator");
        break;
      case 2:
        navigation.navigate("TabNavigator");
        break;
      case 3:
        setPageStatus("First");
        break;
      default:
        break;
    }
  };

  const handleNextButton = () => {
    if (isButtonEnabled) {
      switch (step) {
        case 1:
          setPageStatus("Second");
          break;
        case 2:
          setPageStatus("Third");
          break;
        case 3:
          navigation.navigate("TabNavigator");
          break;
        default:
          break;
      };
    };
  };

  return (
    <>
      <FooterContainer>
        <SkipButton
          onPress={handleSkipButton}
        >
          <SkipText>
            {step === 3 ? "redo" : "Skip"}
          </SkipText>
        </SkipButton>
        <ProgressContainer>
          <ProgressCircle isActive={step >= 1}/>
          <ProgressCircle isActive={step >= 2}/>
          <ProgressCircle isActive={step >= 3}/>
        </ProgressContainer>
        <NextButton onPress={handleNextButton} disabled={!isButtonEnabled} isEnabled={isButtonEnabled}>
        {step === 3 ? <Ionicons name="checkmark-outline" size={28} color="#fff" />: <Ionicons name="chevron-forward" size={28} color="#fff" />}
        </NextButton>
      </FooterContainer>
    </>
  )
};

export default OnBoardingFooter;

// styled
const FooterContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
`;

const SkipButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  active-opacity: 0.8;
`;

const SkipText = styled.Text`
  font-size: 18px;
  font-family: "Medium";
`;

const ProgressContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  align-items: center;
`;

const ProgressCircle = styled.View<{ isActive: boolean }>`
  width: 11px;
  height: 11px;
  border-radius: 11px;
  background-color: ${({ isActive }) => (isActive ? "grey" : "lightgrey")};
`;

const NextButton = styled.TouchableOpacity<{ isEnabled: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 24px;
  background-color: ${({ isEnabled }) => (isEnabled ? "grey" : "lightgrey")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;