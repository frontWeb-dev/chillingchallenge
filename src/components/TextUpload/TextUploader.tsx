import { useEffect, useState } from "react";
import styled from "styled-components/native";

interface InProgressPageProps {
  type: number;
  setForm: React.Dispatch<React.SetStateAction<{ text: string | string[] }>>;
}

const TextUploader = ({ type, setForm }: InProgressPageProps) => {
  useEffect(() => {
    if (type === 2) {
      setForm({ text: "" });
    } else if (type === 3) {
      setForm({ text: [] });
    }
  }, []);

  const onChangeText = (text: string) => {
    setForm({
      text: text,
    });
  };

  return (
    <TextForm>
      <TextInput
        placeholder="오늘의 미션 내용 적어보기"
        onChangeText={(text: string) => onChangeText(text)}
      />
    </TextForm>
  );
};

export default TextUploader;

const TextForm = styled.View`
  width: 100%;
  padding: 20px;
  margin: 20px 0;
  flex: 1;
  justify-content: space-between;
  border: 1px solid #f1f1f1;
  border-radius: 20px;
`;

const TextInput = styled.TextInput``;
