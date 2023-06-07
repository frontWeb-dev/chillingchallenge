import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

interface TreeProps {
  badgeNumber: number;
};

const Tree = ({badgeNumber} : TreeProps) => {

  const getImageSource = (badgeNumber: number) => {
    const images: { [key: number]: any } = {
      0: require("../../assets/trees/tree_0.png"),
      1: require("../../assets/trees/tree_1.png"),
      2: require("../../assets/trees/tree_2.png"),
      3: require("../../assets/trees/tree_3.png"),
      4: require("../../assets/trees/tree_4.png"),
      5: require("../../assets/trees/tree_5.png"),
      6: require("../../assets/trees/tree_6.png"),
      7: require("../../assets/trees/tree_7.png"),
      8: require("../../assets/trees/tree_8.png"),
      9: require("../../assets/trees/tree_9.png"),
    };
  
    return images[badgeNumber];
  };

  return (
    <ScrollView>
      <PageWrapper>
        <BadgeText>
          배지 {badgeNumber}개를 모았어요.
        </BadgeText>
        <ImageContainer>
          <TreeImage source={getImageSource(badgeNumber)}/>
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
  margin-bottom: 15px;
`;

const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TreeImage = styled.Image`
  width: 300px;
  height: 300px;
  object-fit: scale-down;
`;