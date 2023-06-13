import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";

import Layout from "@components/Layout";
import { RootNavigatorParamList } from "@navigations/RootNavigator";
import LongButton from "@components/mission/LongButton";
import Header from "@components/Header";
import ToastContainer from "@components/ToastContainer";
import InputControl from "@components/login/InputControl";
import { Platform } from "react-native";

const SignInScreen: React.FC = () => {
  const navigation = useNavigation<RootNavigatorParamList>();
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

  const onSubmit = (data: any) => {
    // data axios
    setToastText("회원 가입에 성공하였습니다.");
    setToast(true);
  };

  return (
    <Layout color="#10b767">
      <Header text="회원가입" color="#10b767" noBack />
      <ToastContainer text={toastText} show={toast} setShow={setToast} />
      <Container behavior={Platform.select({ ios: "padding", android: undefined })}>
        <LoginForm>
          <InputControl
            control={control}
            name="nickname"
            placeholder={"NickName"}
            errors={errors}
          />
          <InputControl control={control} name="email" placeholder={"Email"} errors={errors} />
          <InputControl
            control={control}
            name="password"
            placeholder={"Password"}
            errors={errors}
          />
        </LoginForm>
        <ButtonView>
          <LongButton text="회원가입 하기" onSubmit={handleSubmit(onSubmit)} />
        </ButtonView>
      </Container>
    </Layout>
  );
};

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  padding: 30px 0;
  gap: 50px;
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

export default SignInScreen;
