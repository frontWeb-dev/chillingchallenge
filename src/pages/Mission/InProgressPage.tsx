import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import LongButton from "../../components/mission/LongButton";
import ImageUploader from "../../components/imageUpload/ImageUploader";
import TextUploader from "../../components/TextUpload/TextUploader";
import { useLongTextStore, useShortTextStore } from "../../store/store";

interface InProgressPageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  comment: string;
  method: string | string[];
  type: number;
}

const InProgressPage = ({ setMissionStatus, type, method }: InProgressPageProps) => {
  const [page, setPage] = useState(1);
  const [form, setForm] = useState("");
  const [imageSelected, setImageSelected] = useState("");

  const { text, addText, clearText } = useShortTextStore();
  const { texts, addTexts, clearTexts } = useLongTextStore();

  let uploader;

  switch (type) {
    case 1:
      uploader = <ImageUploader setImageSelected={setImageSelected} uploaderType="UPLOAD" />;
      break;
    case 2:
      uploader = <TextUploader type={type} setForm={setForm} />;
      break;
    case 3:
      uploader = <TextUploader type={type} form={form} setForm={setForm} />;
      break;
    default:
      uploader = null;
  }

  const handleSubmit = () => {
    if (type === 2) {
      addText(form);
      setMissionStatus("Complete");
    } else if (type === 3) {
      addTexts(form);
      setForm("");
      setPage(page + 1);
      if (page === 4) setMissionStatus("Complete");
    } else if (type === 1) {
      setMissionStatus("Complete");
    }
  };

  useEffect(() => {
    console.log(texts);
    console.log(text);
  }, [texts, text]);

  return (
    <Wrapper>
      <Container>
        <MissionQuote>{type === 3 ? method[page - 1] : method}</MissionQuote>
        <Uploader>{uploader}</Uploader>
      </Container>
      <LongButton text={page === 4 ? "인증 등록 하기" : "다음"} onSubmit={handleSubmit} />
    </Wrapper>
  );
};

export default InProgressPage;

// styled
const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  padding: 10px 20px;
  justify-content: space-between;
`;

const Container = styled.View`
  width: 100%;
  flex: 1;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Uploader = styled.View`
  width: 100%;
  flex: 3;
`;

const MissionQuote = styled.Text`
  padding: 0 10px;
  font-size: 16px;
  text-align: center;
  line-height: 20px;
  color: ${(props) => props.theme.subTextColor};
`;
