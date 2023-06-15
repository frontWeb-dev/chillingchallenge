import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";

import { RootNavigatorParamList } from "@navigations/RootNavigator";
import LongButton from "@components/mission/LongButton";

import InputControl from "@components/login/InputControl";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { signInAPI } from "api/auth";
import useUserStore from "@store/store";

export interface SignInProps {
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
  setToastText: React.Dispatch<React.SetStateAction<string>>;
}

const SignInPage = ({ setToast, setToastText }: SignInProps) => {
  const navigation = useNavigation<RootNavigatorParamList>();
  const { user, setUser } = useUserStore();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const body = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await signInAPI(body);
      const {
        accessToken,
        userCode,
        user: { nickname },
      } = response;

      setUser({ email: data.email, nickname: nickname });

      await AsyncStorage.setItem("user-code", JSON.stringify(userCode));
      await AsyncStorage.setItem("user-token", JSON.stringify(accessToken));

      setToastText("로그인에 성공하였습니다");
      setToast(true);

      setTimeout(() => {
        navigation.navigate("TabNavigator");
      }, 1500);
    } catch (error) {
      console.log(error);
      setToastText("로그인에 실패하였습니다.");
      setToast(true);
    }
  };

  return (
    <>
      <LoginForm>
        <InputControl
          label="이메일"
          name="email"
          placeholder="이메일을 입력해주세요"
          control={control}
          errors={errors}
        />
        <InputControl
          label="비밀번호"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          control={control}
          errors={errors}
        />
      </LoginForm>
      <LongButton text="로그인" onSubmit={handleSubmit(onSubmit)} />
    </>
  );
};

const LoginForm = styled.View`
  flex: 2;
  justify-content: center;
  gap: 20px;
  padding: 0 20px;
`;

export default SignInPage;
