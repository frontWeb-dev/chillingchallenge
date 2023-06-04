import { NavigationProp, useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useRef } from "react";
import qs from "qs";
import { WebView } from "react-native-webview";
import styled from "styled-components/native";

export type RootStackParamList = {
  TabNavigator: { screen: string } | undefined;
};

const REST_API_KEY = "351c090ff6ac69a8bcd4d7ae9a364c99";
const REDIRECT_URI = "http://192.168.219.102:19006/MainScreen";
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KakaoLogin = () => {
  const webViewRef = useRef<WebView | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const getCode = (target: string) => {
    const exp = "code=";
    const condition = target.indexOf(exp);
    if (condition !== -1) {
      const requestCode = target.substring(condition + exp.length);
      requestToken(requestCode);
    }
  };

  const requestToken = async (code: string) => {
    const requestTokenUrl = "https://kauth.kakao.com/oauth/token";

    await axios({
      method: "post",
      url: requestTokenUrl,
      params: {
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code,
      },
    })
      .then((response) => {
        getToken(response.data.access_token);
      })
      .catch((error) => console.log(error));
  };

  const getToken = async (token: string) => {
    await axios
      .get(`http://localhost:8080/api/oauth2/kakao?code=${token}`)
      .then((res) => {
        console.log(res);
        webViewRef.current?.injectJavaScript(`window.ReactNativeWebView.postMessage('success')`);
      })
      .catch((error) => {
        console.log(error);
        webViewRef.current?.injectJavaScript(`window.ReactNativeWebView.postMessage('success')`);
      });
  };

  function handleMessage(event: any) {
    const { data } = event.nativeEvent;
    console.log(data);
    if (data === "message from webView") {
      const url = event.nativeEvent.url;
      getCode(url);
    }
    if (data === "success") {
      navigation.navigate("TabNavigator", { screen: "TabNavigator" });
    } else return;
  }

  return (
    <Container>
      <WebView
        ref={webViewRef}
        style={{ flex: 1 }}
        originWhitelist={["*"]}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={(event) => handleMessage(event)}
      />
    </Container>
  );
};

export default KakaoLogin;

const Container = styled.View`
  flex: 1;
`;
