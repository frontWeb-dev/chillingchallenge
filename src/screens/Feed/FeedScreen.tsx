import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import { FeedData, feeds } from "@mocks/feeds";
import { MissionData, editedMissions } from "@mocks/missions";
import Layout from "@components/Layout";
import Header from "@components/Header";

export type DetailParamsList = {
  FeedDetailScreen: { data: FeedData; missionData: MissionData };
};

const FeedScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<DetailParamsList>>();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<FeedData[]>([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    feeds.map((feed) => {
      setState((prev) => [...prev, feed]);
    });
    // const url = `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`;
    // fetch(url)
    //   .then((r) => r.json())
    //   .then((data) => {
    //     setState({
    //       data: state.data.concat(data),
    //     });
    //     setPage((prev) => prev + 1);
    //   });
  };

  const renderItem = ({ item }: any) => {
    const mission = editedMissions.find((m) => m.id === item.missionId);

    return (
      <Feed onPress={() => feedPress(item, mission!)}>
        <TitleView>
          <Title>{mission?.title.replace("\n", " ")}</Title>
          <Date>2023-05-30</Date>
        </TitleView>
        <ContentsView>
          {mission?.type === 1 ? (
            <Image source={{ uri: item.missionContents[0] }} />
          ) : (
            <Text>{item.missionContents.slice(0, -1).join(" ")}</Text>
          )}
        </ContentsView>
        <Text>{item.missionContents[item.missionContents.length - 1]}</Text>
      </Feed>
    );
  };

  const feedPress = (item: FeedData, mission: MissionData) => {
    navigation.navigate("FeedDetailScreen", { data: item, missionData: mission });
  };

  const handleLoadMore = () => {
    if (feeds.length > 3) {
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Header text="나의 칠링챌링" />
      <Container
        data={state}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={1}
      />
    </Layout>
  );
};

export default FeedScreen;

const Container = styled.FlatList`
  padding: 20px;
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
