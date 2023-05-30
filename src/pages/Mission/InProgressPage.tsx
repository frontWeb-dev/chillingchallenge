import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import LongButton from "../../components/mission/LongButton";
import ImageUploader from "../../components/imageUpload/ImageUploader";
import TextUploader from "../../components/TextUpload/TextUploader";

interface InProgressPageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  title: string;
  comment: string;
  desc: string;
  bgImage: string;
  type: number;
}

const InProgressPage = ({ setMissionStatus, type }: InProgressPageProps) => {
  const [form, setForm] = useState({});
  const [imageSelected, setImageSelected] = useState("");

  let uploader;
  switch (type) {
    case 1:
      uploader = <ImageUploader setImageSelected={setImageSelected} uploaderType="PROFILE" />;
      break;
    case 2:
      uploader = <TextUploader type={type} setForm={setForm} />;
      break;
    case 3:
      uploader = <TextUploader type={type} setForm={setForm} />;
      break;
    default:
      uploader = null;
  }

  const handleSubmit = () => {
    console.log(form);
    setMissionStatus("Complete");
  };

  return (
    <Wrapper>
      <MissionQuote>미션 진행</MissionQuote>
      {uploader}
      <LongButton
        type="InProgress"
        text="인증 등록하기"
        setMissionStatus={setMissionStatus}
        onSubmit={handleSubmit}
      />
    </Wrapper>
  );
};

export default InProgressPage;

// styled
const Wrapper = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const MissionQuote = styled.Text`
  font-size: 24px;
  font-family: "ExtraBold";
`;
