import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

interface InProgressPageProps {
  type: number;
  form?: string;
  setForm: React.Dispatch<React.SetStateAction<string>>;
}

const TextUploader = ({ type, setForm, form }: InProgressPageProps) => {
  const onChangeText = (text: string) => {
    setForm(text);
  };

  return (
    <TextForm>
      <TextInput
        placeholder="텍스트를 입력하세요."
        onChangeText={(text: string) => onChangeText(text)}
        value={form}
      />
    </TextForm>
  );
};

export default TextUploader;

const TextForm = styled.View`
  width: 100%;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  flex: 1;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
`;

const TextInput = styled.TextInput``;
