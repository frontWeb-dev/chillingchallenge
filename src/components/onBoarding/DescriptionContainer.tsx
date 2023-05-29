import React, { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import styled from "styled-components/native"

interface DescriptionContainerProps {
  headerText: string;
  contentText: string;
}

const DescriptionContainer = ({ headerText, contentText }: DescriptionContainerProps) => {
  const headerTextAnim = useRef(new Animated.Value(0)).current;
  const contentTextAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(headerTextAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
      easing: Easing.out(Easing.linear),
    }).start();
    setTimeout(() => {
      Animated.timing(contentTextAnim, {
        toValue: 1,
        useNativeDriver: true,
        easing: Easing.out(Easing.linear),
      }).start();
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <HeaderText style={{ opacity: headerTextAnim }}>
        {headerText}
      </HeaderText>
      <ContentText style={{ opacity: contentTextAnim }}>
        {contentText}
      </ContentText>
    </Wrapper>
  )
};

export default DescriptionContainer;

// styled
const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`;

const HeaderText = styled(Animated.Text)`
  font-size: 24px;
  font-family: "ExtraBold";
  color: #404040;
`;

const ContentText = styled(Animated.Text)`
  font-size: 18px;
  font-family: "Regular";
  color: grey;
  text-align: center;
  line-height: 24px;
`;
