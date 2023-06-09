import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ref, onValue } from "@firebase/database";

import { database } from "../../../firebaseConfig";

import Layout from "@components/Layout";
import Header from "@components/Header";
import Margin from "@components/Margin";

const TempFeedScreen = () => {
  const [data, setData] = useState<any[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const dataRef = ref(database, "mission");

      const fetchData = () => {
        onValue(dataRef, (snapshot) => {
          const missionData = snapshot.val();
          if (missionData) {
            const missionList = Object.entries(missionData).map(([key, value]) => ({ key, value }));
            setData(missionList);
          }
        });
      };

      fetchData();
      console.log("data: ", data);
    }, [])
  );

  console.log("data: ", data);

  return (
    <Layout>
      <Header text="나의 칠링" />
      <Margin props={30} />
      <ScrollView>
        {/* <ContentList
          data={data}
          renderItem={renderGame}
          keyExtractor={(game) => game.id}
        /> */}
      </ScrollView>
    </Layout>
  );
};

export default TempFeedScreen;

// styled
const ContentList = styled.FlatList`
  flex: 1;
`;
