import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

const Wrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: #47af51;
`;

const Inner = styled.View`
  width: 100%;
  flex: 1;
  background-color: white;
`;
export default Layout;
