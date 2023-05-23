import React from "react";
import { Text, View } from "react-native";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Margin from "../components/Margin";
import styled from "styled-components/native";

const UserScreen: React.FC = () => {
  return (
    <Layout>
      <Header text="사용자 화면" />
      <Margin props={16} />
      <Container>
        <Text>사용자 화면입니당!</Text>
      </Container>
    </Layout>
  );
};

export default UserScreen;

const Container = styled.View`
  padding: 10px;
`;
