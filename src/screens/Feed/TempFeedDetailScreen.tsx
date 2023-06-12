import React from "react";
import styled from "styled-components/native";
import { RouteProp, useRoute } from "@react-navigation/native";

import Layout from "@components/Layout";
import Header from "@components/Header";
import { ScrollView } from "react-native";

type RouteParams = {
  formattedDate: string;
  missionTitle: string;
  content: string | null;
  happy: string;
  type: number;
  method: string;
};

const TempFeedDetailScreen = () => {
  const { params } = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const { formattedDate, missionTitle, content, happy, type, method } = params;

  let detailContent;

  switch (type) {
    case 1:
      detailContent = <Image source={{ uri: content! }} />;
      break;
    case 2:
      detailContent = <TextContent>{content}</TextContent>;
      break;
    case 3:
      const parsedMethod = JSON.parse(method);
      const parsedText = JSON.parse(content!);
      detailContent = (
        <React.Fragment>
          {parsedMethod.map((method: string, index: number) => (
            <React.Fragment key={`method-${index}`}>
              <MethodContent>{method}</MethodContent>
              {parsedText[index] && (
                <TextContent key={`text-${index}`}>{parsedText[index]}</TextContent>
              )}
            </React.Fragment>
          ))}
        </React.Fragment>
      );
      break;
    default:
      break;
  }

  return (
    <Layout color="#10b767">
      <Header text="나의 칠링" noBack={true} color="#10b767" />
      <ScrollView>
        <Container>
          <Feed>
            <TitleView>
              <Title>{missionTitle}</Title>
              <Date>{formattedDate}</Date>
            </TitleView>
            <ContentsView>{detailContent}</ContentsView>
            <Happy>{happy}</Happy>
          </Feed>
        </Container>
      </ScrollView>
    </Layout>
  );
};

export default TempFeedDetailScreen;

// styled
const Container = styled.View`
  padding: 0 20px;
`;

const Feed = styled.View`
  padding: 20px;
  margin-top: 30px;
  border-radius: 20px;
  background-color: #f5f5f8;
  box-shadow: 2px 2px 2px #bbb;
  gap: 15px;
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
  width: 100%;
  min-height: 300px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  overflow: hidden;
  padding: 20px;
`;

const Image = styled.Image`
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-radius: 20px;
`;

const TextContent = styled.Text`
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-family: "Regular";
  line-height: ${(props) => props.theme.font.normal};
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`;

const MethodContent = styled.Text`
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-family: "Bold";
  line-height: ${(props) => props.theme.font.normal};
`;

const Happy = styled.Text`
  font-size: 16px;
  font-family: "Regular";
  line-height: ${(props) => props.theme.font.normal};
`;
