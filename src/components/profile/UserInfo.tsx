import React from "react";
import styled from "styled-components/native";

interface UserInfoProps {
  name: string;
  email: string;
};

const UserInfo = ({name, email} : UserInfoProps) => {

  return (
    <>
      <Wrapper>
        <InfoContainer>
          <InfoHeader>닉네임</InfoHeader>
          <InputContainer>
            <InfoInput
              placeholder={name}
            />
          </InputContainer>
        </InfoContainer>
        <InfoContainer>
          <InfoHeader>이메일</InfoHeader>
          <InputContainer>
            <InfoInput
              placeholder={email}
            />
          </InputContainer>
        </InfoContainer>
      </Wrapper>
    </>
  );
};

export default UserInfo;

// styled
const Wrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 10px 20px;
`;

const InfoContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const InfoHeader = styled.Text`
  font-size: 16px;
  font-family: "Medium";
  padding: 0 15px;
`;

const InputContainer = styled.View`
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #909090;
  border-radius: 12px;
`;

const InfoInput = styled.TextInput`

`;