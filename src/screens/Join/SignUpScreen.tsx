import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";

import Layout from "@components/Layout";
import { RootNavigatorParamList } from "@navigations/RootNavigator";
import LongButton from "@components/mission/LongButton";
import Header from "@components/Header";
import ToastContainer from "@components/ToastContainer";

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
      <Header text="회원가입" color="#10b767" />
      <ToastContainer text={toastText} show={toast} setShow={setToast} />
      <Container>
        <LoginForm>
          <InputView>
            <Controller
              control={control}
              rules={{ required: true }}
              name="nickname"
              defaultValue={""}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder="NickName"
                />
              )}
            />
            {errors.email && <ErrorMessage>닉네임을 입력해주세요</ErrorMessage>}
          </InputView>
          <InputView>
            <Controller
              control={control}
              rules={{ required: true }}
              name="email"
              defaultValue={""}
              render={({ field: { onChange, value } }) => (
                <Input onChangeText={(value) => onChange(value)} value={value} placeholder="Id" />
              )}
            />
            {errors.email && <ErrorMessage>아이디를 입력해주세요</ErrorMessage>}
          </InputView>
          <InputView>
            <Controller
              control={control}
              rules={{ required: true }}
              name="password"
              defaultValue={""}
              render={({ field: { onChange, value } }) => (
                <Input
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder="Password"
                  secureTextEntry
                />
              )}
            />
            {errors.password && <ErrorMessage>비밀번호를 입력해주세요</ErrorMessage>}
          </InputView>
        </LoginForm>
        <ButtonView>
          <LongButton text="회원가입 하기" onSubmit={handleSubmit(onSubmit)} />
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
  gap: 30px;
`;

const LoginForm = styled.View`
  width: 100%;
  padding: 0 20px;
  gap: 24px;
`;

const InputView = styled.View`
  width: 100%;
  gap: 10px;
`;

const Input = styled.TextInput`
  width: 100%;
  font-family: "Light";
  border: 1px solid #ddd;
  padding: 15px 20px;
  border-radius: 5px;
`;

const ErrorMessage = styled.Text`
  padding-left: 10px;
  font-size: 14px;
  color: red;
`;

const ButtonView = styled.View`
  width: 100%;
  gap: 20px;
  align-items: center;
`;

export default SignInScreen;
