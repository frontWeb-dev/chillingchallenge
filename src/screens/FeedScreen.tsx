import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import Layout from "../components/Layout";
import Header from "../components/Header";

import styled from "styled-components/native";

const FeedScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({ data: [] });
  const [page, setPage] = useState(1);

  const getData = () => {
    const url = `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setState({
          data: state.data.concat(data),
        });
        setPage((prev) => prev + 1);
      });
  };

  const renderItem = ({ item }) => (
    <Feed style={{ borderBottomWidth: 1, marginTop: 20 }}>
      <View>
        <Title>미션 제목</Title>
        <Date>2023-05-30</Date>
      </View>
      <Image source={{ uri: item.url }} style={{ height: 150, borderRadius: 10 }} />
      <Text>
        퇴근 후 산책했어요! 하늘도 너무 예뻤고, 날씨도 좋아서 산책하고 나니 마음이 한결
        가벼워졌어요. 상쾌한 하루의 마무리네요 :) 내일도 상쾌하게!
      </Text>
    </Feed>
  );

  const handleLoadMore = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Header text="칠링챌링 스토리" />
      <Container
        data={state.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
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

const Feed = styled.View`
  padding: 30px 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

const View = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 18px;
  font-style: "ExtraBold";
`;

const Date = styled.Text`
  font-size: 14px;
  color: #4d4d4d;
`;

const Image = styled.Image`
  height: 150px;
  margin: 20px 0;
`;
