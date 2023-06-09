import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { RootNavigatorParamList } from "@navigations/RootNavigator";

const AfterLoginSplashScreen = () => {
  const navigation = useNavigation<RootNavigatorParamList>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("TabNavigator");
    }, 2000);
  }, []);

  return (
    <>
      <PageWrapper>
        <SplashImage source={require("@assets/Splash_2.png")} />
      </PageWrapper>
    </>
  );
};

export default AfterLoginSplashScreen;

// styled
const PageWrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SplashImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;
