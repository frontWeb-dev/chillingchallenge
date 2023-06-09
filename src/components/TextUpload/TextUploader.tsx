import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

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
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <TextForm>
        <TextInput
          placeholder="텍스트를 입력하세요."
          onChangeText={(text: string) => onChangeText(text)}
          value={form}
          multiline
        />
      </TextForm>
    </TouchableWithoutFeedback>
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
  border: 1px solid ${(props) => props.theme.color.borderColor};
  border-radius: 14px;
`;

const TextInput = styled.TextInput`
  font-size: 16px;
  line-height: ${(props) => props.theme.font.title};
`;
