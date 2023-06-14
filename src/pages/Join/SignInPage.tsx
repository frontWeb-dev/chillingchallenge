import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";

import Layout from "@components/Layout";
import { RootNavigatorParamList } from "@navigations/RootNavigator";
import LongButton from "@components/mission/LongButton";
import ToastContainer from "@components/ToastContainer";
import InputControl from "@components/login/InputControl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ModalProps } from "@components/login/Modal";

export interface SignInProps {
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
  setToastText: React.Dispatch<React.SetStateAction<string>>;
}

const SignInPage = ({ setToast, setToastText }: SignInProps) => {
  const navigation = useNavigation<RootNavigatorParamList>();

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
      // setTimeout(() => {
      //   navigation.navigate("SelectScreen");
      // }, 1500);
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
