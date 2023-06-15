import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { NavigationProp, useFocusEffect, useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import { FeedData } from "@mocks/feeds";
import { MissionData, editedMissions } from "@mocks/missions";
import Layout from "@components/Layout";
import Header from "@components/Header";
import ImageText from "@components/ImageText";
import { getFeedAPI } from "api/feed";

export type DetailParamsList = {
  FeedDetailScreen: { data: FeedData; missionData: MissionData };
};

interface DataResult {
  localDateTime: Date;
  missionId: number;
  missionType: number;
  stringAndPath: string[];
  uuid: string;
}

const FeedScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<DetailParamsList>>();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<DataResult[]>([]);
  const [page, setPage] = useState(0);

  const getData = async () => {
    const code = "usercode"; // await AsyncStorage.getItem('user-code');
    try {
      const response = await getFeedAPI(code, page);

      response.map((data: DataResult) => {
        setState((prev) => [...prev, data]);
        setLoading(false);
      });

      setPage((page) => page + 1);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
          {mission?.type === 1 && <Image source={{ uri: item.stringAndPath[0] }} />}
          {mission?.type !== 1 &&
            item.stringAndPath.slice(0, -1).map((text: string) => <Text>{text}</Text>)}
        </ContentsView>
        <Text>{item.stringAndPath[item.stringAndPath.length - 1]}</Text>
      </Feed>
    );
  };

  const feedPress = (item: FeedData, mission: MissionData) => {
    navigation.navigate("FeedDetailScreen", { data: item, missionData: mission });
  };

  const handleLoadMore = () => {
    if (loading) {
      return;
    } else {
      getData();
    }
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
        keyExtractor={(item: any) => item.localDateTime}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.8}
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
  height: 200px;
  object-fit: contain;
`;
