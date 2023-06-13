import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";

import Layout from "@components/Layout";
import { RootNavigatorParamList } from "@navigations/RootNavigator";
import LongButton from "@components/mission/LongButton";
import ToastContainer from "@components/ToastContainer";
import { LoginNavigatorParamList } from "@navigations/LoginNavigator";
import InputControl from "@components/login/InputControl";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignInScreen: React.FC = () => {
  const navigation = useNavigation<RootNavigatorParamList>();
  const loginNavigation = useNavigation<LoginNavigatorParamList>();

  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);
  const [toastText, setToastText] = useState("");

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      /* 
        Todo 
        - Axios 로그인 , Token 받아서 async storage 저장하기
      */
      await AsyncStorage.setItem("user-info", JSON.stringify(data));

      setToastText("로그인에 성공하였습니다");
      setToast(true);
    } catch {
      setToastText("로그인에 실패하였습니다.");
      setToast(true);
    } finally {
      setTimeout(() => {
        navigation.navigate("AfterLoginSplashScreen");
      }, 1500);
    }
  };

  return (
    <Layout>
      <ToastContainer text={toastText} show={toast} setShow={setToast} />
      <Container>
        <LogoView>
          <LogoImage source={require("@assets/tabIcon.png")} />
          <Title>칠링챌링</Title>
        </LogoView>
        <LoginForm>
          <InputControl control={control} name="email" placeholder={"Email"} errors={errors} />
          <InputControl
            control={control}
            name="password"
            placeholder={"Password"}
            errors={errors}
          />
        </LoginForm>

        <ButtonView>
          <LongButton text="로그인하기" onSubmit={handleSubmit(onSubmit)} />
          <FindPasswordButton onPress={() => loginNavigation.navigate("FindPasswordScreen")}>
            <FindPasswordText>비밀번호 찾기</FindPasswordText>
          </FindPasswordButton>
          <JoinButton onPress={() => loginNavigation.navigate("SignUpScreen")}>
            <JoinText>새로 오셨나요? 회원가입 하기</JoinText>
          </JoinButton>
        </ButtonView>
      </Container>
    </Layout>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  margin-bottom: 40px;
  gap: 30px;
`;

const LogoView = styled.View`
  align-items: center;
`;

const LogoImage = styled.Image`
  width: 180px;
  height: 100px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-family: "Bold";
  color: ${(props) => props.theme.color.green_200};
`;

const LoginForm = styled.View`
  width: 100%;
  padding: 0 20px;
  gap: 14px;
`;

const ButtonView = styled.View`
  width: 100%;
  gap: 20px;
  align-items: center;
`;

const FindPasswordButton = styled.TouchableOpacity``;
const FindPasswordText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.color.green_200};
`;

const JoinButton = styled.TouchableOpacity`
  margin-top: 30px;
  color: ${(props) => props.theme.color.green_200};
`;

const JoinText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.color.green_200};
`;

export default SignInScreen;
