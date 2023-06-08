import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { RootNavigatorParamList } from "@navigations/RootNavigator";

interface OnBoardingFooterProps {
  step: number;
  setPageStatus: React.Dispatch<React.SetStateAction<number>>;
  handleStepPress: (step: number) => void;
}

const OnBoardingFooter = ({ step, setPageStatus, handleStepPress }: OnBoardingFooterProps) => {
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
        navigation.navigate("TabNavigator");
        break;
      default:
        break;
    }
  };

  const handleNextButton = () => {
    if (isButtonEnabled) {
      switch (step) {
        case 1:
          handleStepPress(2);
          break;
        case 2:
          handleStepPress(3);
          break;
        case 3:
          handleStepPress(4);
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <FooterContainer>
        <SkipButton active-opacity={0.8} onPress={handleSkipButton}>
          <SkipText>Skip</SkipText>
        </SkipButton>
        <ProgressContainer>
          <ProgressCircle isActive={step >= 1} />
          <ProgressCircle isActive={step >= 2} />
          <ProgressCircle isActive={step >= 3} />
        </ProgressContainer>
        <NextButton onPress={handleNextButton} disabled={!isButtonEnabled}>
          <NextButtonCircle isEnabled={isButtonEnabled}>
            <Ionicons name="chevron-forward" size={24} color="#fff" />
          </NextButtonCircle>
        </NextButton>
      </FooterContainer>
    </>
  );
};

export default OnBoardingFooter;

// styled
const FooterContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
`;

const SkipButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

const SkipText = styled.Text`
  font-size: 16px;
  font-family: "Medium";
  line-height: ${(props) => props.theme.font.subtitle};
  letter-spacing: 0.5;
`;

const ProgressContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  align-items: center;
`;

const ProgressCircle = styled.View<{ isActive: boolean }>`
  width: 11px;
  height: 11px;
  border-radius: 11px;
  background-color: ${(props) =>
    props.isActive ? props.theme.color.green_200 : props.theme.color.green_100};
`;

const NextButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NextButtonCircle = styled.View<{ isEnabled: boolean }>`
  width: 30px;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background-color: ${(props) =>
    props.isEnabled ? props.theme.color.green_200 : props.theme.color.green_100};
`;
