import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import styled from "styled-components/native";
import { DetailParamsList } from "./FeedScreen";

import Layout from "@components/Layout";
import Header from "@components/Header";
import ImageText from "@components/ImageText";

const FeedDetailScreen = () => {
  const { params } = useRoute<RouteProp<DetailParamsList, "FeedDetailScreen">>();
  const data = params.data;
  const mission = params.missionData;

  return (
    <Layout>
      <Header text="나의 칠링" />
      <ImageText text="김새싹님, 이만큼이나 해냈어요!" image={require("@assets/write.png")} />
      <Container>
        <Feed>
          <TitleView>
            <Title>{mission.title}</Title>
            <Date>2022-06-06</Date>
          </TitleView>
          <ContentsView>
            {mission?.type === 1 && <Image source={{ uri: data.stringAndPath[0] }} />}
            {data.stringAndPath.slice(0, -1).map((text) => (
              <Text>{text}</Text>
            ))}
          </ContentsView>
          <Text>{data.stringAndPath[data.stringAndPath.length - 1]}</Text>
        </Feed>
      </Container>
    </Layout>
  );
};

export default FeedDetailScreen;

const Comment = styled.Text``;

const Container = styled.View`
  padding: 0 20px;
`;

const Feed = styled.View`
  padding: 20px;
  margin-top: 30px;
  border-radius: 20px;
  background-color: #f5f5f8;
  box-shadow: 2px 2px 2px #bbb;
`;

const TitleView = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 18px;
  font-family: "Bold";
`;

const Date = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.color.subTextColor};
`;

const ContentsView = styled.View`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
`;

const Image = styled.Image`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Text = styled.Text``;
