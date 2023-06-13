import React from "react";
import { useForm, Controller } from "react-hook-form";

import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";

import Layout from "@components/Layout";
import { RootNavigatorParamList } from "@navigations/RootNavigator";
import LongButton from "@components/mission/LongButton";

const SignInScreen: React.FC = () => {
  const navigation = useNavigation<RootNavigatorParamList>();
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const handleButtonPress = () => {
    navigation.navigate("AfterLoginSplashScreen");
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Layout>
      <Container>
        <LogoView>
          <LogoImage source={require("@assets/tabIcon.png")} />
          <Title>칠링챌링</Title>
        </LogoView>
        <LoginForm>
          <InputView>
            <Controller
              control={control}
              rules={{ required: true }}
              name="email"
              defaultValue={""}
              render={({ field: { onChange, value } }) => (
                <Input onChangeText={(value) => onChange(value)} value={value} placeholder="ID" />
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
          <LongButton text="로그인하기" onSubmit={handleSubmit(onSubmit)} />
          <FindPasswordButton>
            <FindPasswordText>비밀번호 찾기</FindPasswordText>
          </FindPasswordButton>
          <JoinButton onPress={() => navigation.navigate("SignUpScreen")}>
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
