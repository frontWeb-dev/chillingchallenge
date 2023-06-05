import React, { useState } from "react";
import styled from "styled-components/native";
import bedges from "../../mocks/bedges";

const UserBedgeScreen = () => {
  const renderCell = (index: number) => {
    return (
      <Bedge>
        <BedgeImage
          source={bedges[index].type === "active" ? bedges[index].active : bedges[index].default}
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

const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Bedge = styled.View`
  width: 33%;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

const BedgeImage = styled.Image`
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
  object-fit: contain;
`;

const BedgeName = styled.Text<{ type: string }>`
  font-size: 14px;
  color: ${(props) => (props.type === "active" ? props.theme.textColor : props.theme.subTextColor)};
`;

const Row = styled.View`
  flex-direction: row;
`;
