import React, { useEffect } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

// Firebase 되는지 테스트
import { database } from "../../firebaseConfig";
import { ref, set } from "firebase/database";

import { RootNavigatorParamList } from "../navigations/RootNavigator";

import Layout from "../components/Layout";


const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("OnBoardingScreen");
    }, 3000);
  }, [])

  // Firebase 테스트용
  const onPress = () => {
    const date = new Date();
    postTestData(Date.now(), date.toLocaleString());
  };

  const postTestData = (key:any, value:any) => {
    set(ref(database, 'test/' + key.toString()), value);
  };

  return (
    <>
      <Layout>
        <Text>
          하이
        </Text>
        <Button onPress={onPress}>
          <Text>
            파이어 베이스
          </Text>
        </Button>
      </Layout>
    </>
  );
};

export default SplashScreen;

// styled
const Text = styled.Text`
  font-size: 20px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: gold;
`;