import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

interface TreeProps {
  badgeNumber: number;
};

const Tree = ({badgeNumber} : TreeProps) => {
  return (
    <ScrollView>
      <PageWrapper>
        <BadgeText>
          배지 {badgeNumber}개를 모았어요.
        </BadgeText>
        <ImageContainer>
          <TreeImage source={require("../../assets/tree/tree.png")}/>
        </ImageContainer>
      </PageWrapper>
    </ScrollView>
  );
};

export default Tree;

// styled
const PageWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BadgeText = styled.Text`
  font-size: 16px;
  font-family: "Bold";
  line-height: ${(props) => props.theme.font.subtitle};
`;

const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TreeImage = styled.Image`
  width: 390px;
  height: 390px;
  object-fit: scale-down;
`;