import React from "react";
import { Text } from "react-native";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Margin from "../components/Margin";

const UserScreen: React.FC = () => {
  return (
    <Layout>
      <Header text="사용자 화면"/>
      <Margin props={16} />
      <Text>사용자 화면입니당!</Text>
    </Layout>
  );
};

export default UserScreen;