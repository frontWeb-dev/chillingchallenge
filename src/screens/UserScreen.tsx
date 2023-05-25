import React, { useState } from "react";
import styled from "styled-components/native";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Margin from "../components/Margin";
import Profile from "../components/profile/Profile";
import UserButton from "../components/profile/UserButton";

const UserScreen: React.FC = () => {

  const [isSelected, setIsSelected] = useState(1);


  return (
    <Layout>
      <Header text="나의 칠링챌링" />
      <Margin props={16} />
      <Container>
        <Profile
          username="웃고 싶은 날엔"
          registerDate={55}
          missionNumber={1}
        />
        <Margin props={30} />
        <UserButton
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      </Container>
    </Layout>
  );
};

export default UserScreen;

// styled
const Container = styled.View`
  paddingHorizontal: 15px;
`;
