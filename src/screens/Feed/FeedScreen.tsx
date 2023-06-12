import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import { FeedData } from "@mocks/feeds";
import { MissionData, editedMissions } from "@mocks/missions";
import Layout from "@components/Layout";
import Header from "@components/Header";
import ImageText from "@components/ImageText";
import axios, { AxiosResponse } from "axios";

export type DetailParamsList = {
  FeedDetailScreen: { data: FeedData; missionData: MissionData };
};

interface DataResult {
  localDateTime: Date;
  missionId: number;
  stringAndPath: string[];
  uuid: string;
}

const FeedScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<DetailParamsList>>();
  const [state, setState] = useState<DataResult[]>([]);
  const [page, setPage] = useState(0);

  const getData = async () => {
    const url = `http://ec2-3-37-214-191.ap-northeast-2.compute.amazonaws.com:8080/showMyHistory?code=5&page=${page}&size=5`;
    try {
      const response = await axios.get(url);

      response.data.map((data: DataResult) => {
        setState((prev) => [...prev, data]);
      });
      setPage((page) => page + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }: any) => {
    const mission = editedMissions.find((m) => m.id === item.missionId);

    return (
      <Feed onPress={() => feedPress(item, mission!)}>
        <TitleView>
          <Title>{mission?.title.replace("\n", " ")}</Title>
          <Date>{item.localDateTime.substring(0, 10)}</Date>
        </TitleView>
        <ContentsView>
          {item.stringAndPath.slice(0, -1).map((text: string) => (
            <Text>{text}</Text>
          ))}
        </ContentsView>
        <Text>{item.stringAndPath[item.stringAndPath.length - 1]}</Text>
      </Feed>
    );
  };

  const feedPress = (item: FeedData, mission: MissionData) => {
    navigation.navigate("FeedDetailScreen", { data: item, missionData: mission });
  };

  const handleLoadMore = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Header text="나의 칠링챌링" />
      <ImageText text="김새싹님, 이만큼이나 해냈어요!" image={require("@assets/write.png")} />
      <Container
        data={state}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.missionId}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={1}
      />
    </Layout>
  );
};

export default FeedScreen;

const Container = styled.FlatList`
  margin-top: 10px;
  padding: 10px 20px 20px 20px;
  flex: 1;
`;

const Feed = styled.TouchableOpacity`
  padding: 30px 20px;
  margin-bottom: 30px;
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
  max-height: 450px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100px;
  object-fit: contain;
`;
