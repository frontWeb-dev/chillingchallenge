import React, { useEffect } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { RootNavigatorParamList } from "../navigations/RootNavigator";

import Layout from "../components/Layout";


const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("OnBoardingScreen");
    }, 3000);
  }, [])

  return (
    <>
      <Layout>
        <Text>
          하이
        </Text>
      </Layout>
    </>
  );
};

export default SplashScreen;

// styled
const Text = styled.Text`
  font-size: 20px;
`;