import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components/native";

import LongButton from "@components/mission/LongButton";
import InputControl from "@components/login/InputControl";
import { SignInProps } from "./SignInPage";
import ToastContainer from "@components/ToastContainer";

export interface SignUpProps extends SignInProps {
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

const SignUpPage = ({ setToast, setToastText, setTab }: SignUpProps) => {
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

    setTimeout(() => {
      setTab!(1);
    }, 1000);
  };

  return (
    <>
      <SignUpForm>
        <InputControl
          label="닉네임"
          name="nickname"
          placeholder="닉네임을 입력해주세요"
          control={control}
          errors={errors}
        />
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
        <InputControl
          label="비밀번호 확인"
          name="passwordConfirm"
          placeholder="비밀번호를 한번 더 입력해주세요"
          control={control}
          errors={errors}
        />
      </SignUpForm>
      <LongButton text="회원가입" onSubmit={handleSubmit(onSubmit)} small />
    </>
  );
};

const SignUpForm = styled.KeyboardAvoidingView`
  flex: 2;
  justify-content: center;
  padding: 0 20px;
`;

export default SignUpPage;
