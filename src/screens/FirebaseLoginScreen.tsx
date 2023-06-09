import React, {useEffect} from "react";
import styled from "styled-components/native";

import { database } from "../../firebaseConfig";
import { ref, set } from "@firebase/database";


const FirebaseLoginScreen = () => {
  const onPress = () => {
    const date = new Date();
    postTestData(Date.now(), date.toLocaleString());
  }

  const postTestData = (key: any, value: any) => {
    set(ref(database, 'test/' + key.toString()), value);
  }


  return (
    <>
      <Wrapper onPress={onPress}>
        <Text>
          하이
        </Text>
      </Wrapper>
    </>
  );
};

export default FirebaseLoginScreen;

// styled
const Wrapper = styled.TouchableOpacity`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`

`;