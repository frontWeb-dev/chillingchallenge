import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "#47af51" }}>
      <Inner>{children}</Inner>
    </SafeAreaView>
  );
};

const Inner = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${(props) => props.theme.mainBgColor};
`;
export default Layout;
