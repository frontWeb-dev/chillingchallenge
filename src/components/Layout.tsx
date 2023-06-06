import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface LayoutProps {
  color?: string;
  children: React.ReactNode;
}

const Layout = ({ color, children }: LayoutProps) => {
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: color || "#fff" }}>
      <Inner color={color}>{children}</Inner>
    </SafeAreaView>
  );
};

const Inner = styled.View<{ color?: string }>`
  width: 100%;
  flex: 1;
  background-color: ${(props) => props.color || props.theme.color.mainBgColor};
`;
export default Layout;
