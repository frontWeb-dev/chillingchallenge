import { View } from "react-native";
import { WebView } from "react-native-webview";
import styled from "styled-components/native";

const REST_API_KEY = process.env.REST_API_KEY;
const REDIRECT_URI = process.env.REST_API_KEY;
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KakaoLogin = () => {
  function KakaoLoginWebView(data: any) {
    const exp = "code=";
    var condition = data.indexOf(exp);
    if (condition != -1) {
      var authorize_code = data.substring(condition + exp.length);
      console.log(authorize_code);
    }
  }

  return (
    <Container>
      <WebView
        style={{ flex: 1 }}
        originWhitelist={["*"]}
        scalesPageToFit={false}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={(event) => {
          KakaoLoginWebView(event.nativeEvent["url"]);
        }}
      />
    </Container>
  );
};

export default KakaoLogin;

const Container = styled.View`
  flex: 1;
`;
