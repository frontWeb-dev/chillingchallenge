import React from "react";
import styled from "styled-components/native"

interface DescriptionContainerProps {
  props: number;
}

const DescriptionContainer = ({ props }: DescriptionContainerProps) => {
  return (
    <Wrapper>
      <HeaderText>
        일일 미션 수행하기
      </HeaderText>
      <ContentText>
        사소해 보이는 일들도{"\n"}차곡차곡 해내다 보면{"\n"}어느새 커다란 행복이 되어 있을 거예요.
      </ContentText>
    </Wrapper>
  )
};

export default DescriptionContainer;

// styled
const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`;

const HeaderText = styled.Text`
  font-size: 24px;
  font-family: "ExtraBold";
  color: #404040;
`;

const ContentText = styled.Text`
  font-size: 18px;
  font-family: "Regular";
  color: grey;
  text-align: center;
  line-height: 24px;
`;
