import React, { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";
import styled from "styled-components/native";

interface DescriptionContainerProps {
  headerText: string;
  contentText: string;
  activePageIndex: number;
  pageIndex: number;
}

const DescriptionContainer = ({
  headerText,
  contentText,
  pageIndex,
  activePageIndex,
}: DescriptionContainerProps) => {
  const headerTextAnim = useRef(new Animated.Value(0)).current;
  const contentTextAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(headerTextAnim, {
        toValue: pageIndex === activePageIndex ? 1 : 0,
        useNativeDriver: true,
        duration: 500,
        easing: Easing.out(Easing.linear),
      }).start();
      setTimeout(() => {
        Animated.timing(contentTextAnim, {
          toValue: pageIndex === activePageIndex ? 1 : 0,
          useNativeDriver: true,
          easing: Easing.out(Easing.linear),
        }).start();
      }, 500);
    };

    startAnimation();
  }, [activePageIndex, pageIndex]);

  return (
    <Wrapper>
      <HeaderText style={{ opacity: headerTextAnim }}>{headerText}</HeaderText>
      <ContentText style={{ opacity: contentTextAnim }}>{contentText}</ContentText>
    </Wrapper>
  );
};

export default DescriptionContainer;

// styled
const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 60px;
`;

const HeaderText = styled(Animated.Text)`
  font-size: 24px;
  font-family: "Bold";
  color: ${(props) => props.theme.color.textColor};
  line-height: ${(props) => props.theme.font.title};
`;

const ContentText = styled(Animated.Text)`
  font-size: 16px;
  font-family: "Regular";
  color: ${(props) => props.theme.color.subTextColor};
  text-align: center;
  line-height: ${(props) => props.theme.font.subtitle};
`;
