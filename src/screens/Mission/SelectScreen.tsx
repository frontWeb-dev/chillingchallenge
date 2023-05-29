import { ImageBackground, Text } from "react-native";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { missions } from "../../mocks/missions";
import Card from "../../components/Card";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { MissionNavigatorParamList } from "../../navigations/MissionNavigator";

export interface MissionData {
  id: number;
  title: string;
  comment: string;
  desc: string;
  bedge?: string;
  bgImage: string;
}

const SelectScreen: React.FC = () => {
  const navigation = useNavigation<MissionNavigatorParamList>();
  const onPress = (el: MissionData) => {
    if (el.bedge === "미션 완료") return;
    navigation.navigate("MissionScreen", { data: el });
  };

  return (
    <Layout>
      <Header text="오늘의 칠링챌링" />
      <Container>
        {missions.map((el) => (
          <Card
            key={el.id}
            isDone={el.bedge === "미션 완료"}
            bedge={el.bedge}
            onPress={() => onPress(el)}
          >
            <ImageBackground
              source={{ uri: el.bgImage }}
              resizeMode="cover"
              style={{ flex: 1, justifyContent: "space-between" }}
            >
              <Title>{el.title}</Title>
              <Desc>{el.comment}</Desc>
            </ImageBackground>
          </Card>
        ))}
      </Container>
    </Layout>
  );
};

export default SelectScreen;

const Container = styled.View`
  padding: 30px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Desc = styled.Text`
  font-size: 14px;
`;
