import Header from "@components/Header";
import Layout from "@components/Layout";
import React from "react";
import styled from "styled-components/native";

const FindPasswordScreen = () => {
  return (
    <Layout color="#10b767">
      <Header text="비밀번호 찾기" color="#10b767" noBack />
      <Wrapper></Wrapper>
    </Layout>
  );
};

export default FindPasswordScreen;

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  z-index: 999;
`;
