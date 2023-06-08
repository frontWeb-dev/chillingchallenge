import React, { useState } from "react";
import styled from "styled-components/native";
import bedges from "@mocks/bedges";

const UserBedgeScreen = () => {
  const renderCell = (index: number) => {
    return (
      <Bedge>
        <BedgeImage
          source={bedges[index].type === "active" ? bedges[index].active : bedges[index].default}
          resizeMode="cover"
        />
        <BedgeName type={bedges[index].type}>
          {bedges[index].type === "active" ? bedges[index]?.text : "?"}
        </BedgeName>
      </Bedge>
    );
  };

  return (
    <Container>
      <Row>
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </Row>
      <Row>
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </Row>
      <Row>
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </Row>
    </Container>
  );
};

export default UserBedgeScreen;

const Container = styled.ScrollView`
  width: 100%;
`;

const Bedge = styled.View`
  width: 33%;
  flex: 1;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

const BedgeImage = styled.Image`
  padding: 0;
`;

const BedgeName = styled.Text<{ type: string }>`
  top: -10px;
  font-size: 14px;
  color: ${(props) =>
    props.type === "active" ? props.theme.color.textColor : props.theme.color.subTextColor};
  font-family: ${(props) => (props.type === "active" ? "Bold" : "Regular")};
`;

const Row = styled.View`
  flex-direction: row;
`;
