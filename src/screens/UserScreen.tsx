import React from "react";
import { Text } from "react-native";

import Layout from "../components/Layout";
import Margin from "../components/margin/Margin";

const UserScreen: React.FC = () => {
  return (
    <Layout>
      <Margin props={16} />
      <Text>사용자 화면입니당!</Text>
    </Layout>
  );
};

export default UserScreen;