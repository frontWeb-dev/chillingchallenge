import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";

interface ToastContainerProps {
  text: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToastContainer = ({ text, show, setShow }: ToastContainerProps) => {
  const ToastBox = Animated.createAnimatedComponent(ToastView);
  const ProgressBar = Animated.createAnimatedComponent(ToastBar);

  const [X, setX] = useState(new Animated.Value(0));

  const scaleX = X.interpolate({
    inputRange: [0, 100],
    outputRange: [-300, 0],
  });

  const Y = useState(new Animated.Value(-200))[0];

  const widthX = () => {
    Animated.timing(X, {
      toValue: show ? 100 : 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const toastDown = () => {
    Animated.timing(Y, {
      toValue: show ? 20 : -200,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    toastDown();

    if (show) {
      widthX();
      setTimeout(() => {
        setShow(false);
        setX(new Animated.Value(0));
      }, 1500);
    }
  });

  return (
    <Wrapper>
      <ToastBox
        style={{
          transform: [{ translateY: Y }],
        }}
      >
        <ToastText>{text}</ToastText>
        <ToastBarContainer>
          <ProgressBar
            style={{
              transform: [{ translateX: scaleX }],
            }}
          />
        </ToastBarContainer>
      </ToastBox>
    </Wrapper>
  );
};

export default ToastContainer;

const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  transition: all 0.5s;
`;
const ToastView = styled.View`
  width: 80%;
  height: 60px;
  padding-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  justify-content: space-between;
`;

const ToastText = styled.Text`
  text-align: center;
`;

const ToastBarContainer = styled.View`
  width: 100%;
  height: 5px;
  overflow: hidden;
`;

const ToastBar = styled.View`
  height: 100%;
  background-color: ${(props) => props.theme.color.green_200};
  border-radius: 5px;
`;
