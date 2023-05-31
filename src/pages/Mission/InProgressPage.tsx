import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import LongButton from "../../components/mission/LongButton";
import ImageUploader from "../../components/imageUpload/ImageUploader";
import TextUploader from "../../components/TextUpload/TextUploader";
import { useLongTextStore, useShortTextStore } from "../../store/store";

interface InProgressPageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  title: string;
  comment: string;
  desc: string;
  bgImage: string;
  type: number;
}

const InProgressPage = ({ setMissionStatus, type, desc }: InProgressPageProps) => {
  const [page, setPage] = useState(1);
  const [form, setForm] = useState("");
  const [imageSelected, setImageSelected] = useState("");

  const { text, addText, clearText } = useShortTextStore();
  const { texts, addTexts, clearTexts } = useLongTextStore();

  let uploader;

  switch (type) {
    case 1:
      uploader = <ImageUploader setImageSelected={setImageSelected} uploaderType="PROFILE" />;
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
    }
  };

  useEffect(() => {
    console.log(texts);
    console.log(text);
  }, [texts, text]);

  return (
    <Wrapper>
      <MissionQuote>{type === 3 ? desc[page - 1] : desc}</MissionQuote>
      {uploader}
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
`;

const MissionQuote = styled.Text`
  flex: 1;
  padding: 0 20px;
  margin-top: 50px;
  font-size: 16px;
  text-align: center;
`;
