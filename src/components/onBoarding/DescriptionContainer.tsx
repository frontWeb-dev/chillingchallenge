import React from "react";
import styled from "styled-components/native"

interface DescriptionContainerProps {
  headerText: string;
  contentText: string;
}

const DescriptionContainer = ({ headerText, contentText }: DescriptionContainerProps) => {
  return (
    <Wrapper>
      <HeaderText>
        {headerText}
      </HeaderText>
      <ContentText>
        {contentText}
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
