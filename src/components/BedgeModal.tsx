import { bedgesTypes } from "@mocks/bedges";
import React from "react";
import styled from "styled-components/native";
import LongButton from "./mission/LongButton";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserNavigatorParamList } from "@navigations/UserNavigator";

export interface ModalProps {
  bedge: bedgesTypes;
  setBedge: React.Dispatch<React.SetStateAction<bedgesTypes | null>>;
}

const BedgeModal = ({ bedge, setBedge }: ModalProps) => {
  const handleSubmit = () => {
    setBedge(null);
  };

  return (
    <>
      <Wrapper>
        <ModalWrapper>
          <BedgeImage source={bedge.active} />
          <View>
            <AlertText>새로운 배지를 획득했어요!</AlertText>
            <AlertText>마이페이지에서 확인해 보세요!</AlertText>
          </View>
          <LongButton text="확인" small onSubmit={handleSubmit} />
        </ModalWrapper>
      </Wrapper>
    </>
  );
};

export default BedgeModal;

const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 50px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

const ModalWrapper = styled.View`
  width: 100%;
  height: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const BedgeImage = styled.Image`
  width: 150px;
  height: 150px;
`;

const AlertText = styled.Text`
  text-align: center;
`;
