import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { RootNavigatorParamList } from "@navigations/RootNavigator";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import InputControl from "@components/login/InputControl";
import ToastContainer from "@components/ToastContainer";
import SignInPage from "@pages/Join/SignInPage";
import SignUpPage from "@pages/Join/SignUpPage";
import Modal from "@components/login/Modal";

const AfterLoginSplashScreen = () => {
  const navigation = useNavigation<RootNavigatorParamList>();
  const [modal, setModal] = useState(false);
  const [tab, setTab] = useState(1); // 1: 로그인, 2: 회원가입
  const [toast, setToast] = useState(false);
  const [toastText, setToastText] = useState("");

  return (
    <>
      <PageWrapper>
        <LogoView>
          <LogoImage source={require("@assets/Splash_2_logo.png")} />
        </LogoView>
        <SplashImage source={require("@assets/Splash_2.png")} />

        <ButtonWrapper>
          <ButtonContainer>
            <ButtonView onPress={() => setModal(true)}>
              <ButtonText>로그인 | 회원가입</ButtonText>
            </ButtonView>
          </ButtonContainer>
        </ButtonWrapper>
      </PageWrapper>

      {modal && (
        <Modal
          toast={toast}
          setToast={setToast}
          toastText={toastText}
          setToastText={setToastText}
          tab={tab}
          setTab={setTab}
        >
          {tab === 1 && <SignInPage setToast={setToast} setToastText={setToastText} />}
          {tab === 2 && (
            <SignUpPage setToast={setToast} setToastText={setToastText} setTab={setTab} />
          )}
        </Modal>
      )}
    </>
  );
};

export default AfterLoginSplashScreen;

// styled
const PageWrapper = styled.View`
  flex: 1;
  padding: 50px 0;
  justify-content: center;
  background-color: #fff;
`;

const LogoView = styled.View`
  flex: 1;
  width: 100%;
  padding: 35px;
`;

const LogoImage = styled.Image`
  width: 170px;
  object-fit: scale-down;
`;

const SplashImage = styled.Image`
  flex: 5;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  margin-bottom: 40px;
`;

const ButtonWrapper = styled.View`
  width: 100%;
  padding: 0 45px;
`;

const ButtonContainer = styled.View`
  padding-top: 15px;
  align-items: center;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${(props) => props.theme.color.green_200};
`;

const ButtonView = styled.TouchableOpacity``;

const ButtonText = styled.Text`
  line-height: 22px;
  font-size: 17px;
  font-family: "Bold";
  color: ${(props) => props.theme.color.green_200};
  letter-spacing: 0.4px;
`;
