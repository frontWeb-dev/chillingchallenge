import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";

import { useImageStore, useTextStore } from "@store/store";
import { storage } from "../../../firebaseConfig";

import ImageUploader from "@components/imageUpload/ImageUploader";
import TextUploader from "@components/TextUpload/TextUploader";
import LongButton from "@components/mission/LongButton";
import { UploadResult } from "firebase/storage";

interface InProgressPageProps {
  setMissionStatus: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  comment: string;
  method: string | string[];
  type: number;
}

const InProgressPage = ({ setMissionStatus, type, method }: InProgressPageProps) => {
  const [page, setPage] = useState(1); // state: 페이지네이션
  const [form, setForm] = useState(""); // state: 입력 폼
  const [imageSelected, setImageSelected] = useState(""); // state: 이미지 uri
  const [parsedMethod, setParsedMethod] = useState([]);

  const { uri, addUri, clearUri } = useImageStore(); // 이미지 uri 전역 상태 저장
  const { texts, addTexts, clearTexts } = useTextStore(); // 텍스트 전역 상태 저장

  const getURL = async (snapshot: UploadResult) => {
    await getDownloadURL(snapshot.ref)
      .then((url) => {
        console.log("파이어 베이스에 업로드된 uri 주소: ", url);
        addUri(url);
        addTexts(url);
      })
      .catch((error) => console.log(error));
  };

  // 사진 업로드 함수
  const uploadImage = async () => {
    if (!imageSelected) return;

    // Ref 설정을 위한 파일명 가공
    const fileName = imageSelected.substring(
      imageSelected.lastIndexOf("/") + 1,
      imageSelected.length
    );
    const imagePath = `image/${fileName}`;

    // storageRef 설정
    const storageRef = ref(storage, imagePath);

    // 해당 uri
    const response = await fetch(imageSelected);
    const blob = await response.blob();

    await uploadBytes(storageRef, blob)
      .then((snapshot) => {
        getURL(snapshot);
        console.log("이미지가 성공적으로 업로드되었습니다!");
      })
      .catch((error) => console.log(error));
  };

  // 유형따라 업로더 구분
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

  // 인증하기 버튼 함수
  const handleSubmit = async () => {
    if (type === 2) {
      addTexts(form);
      setMissionStatus("Complete");
    } else if (type === 3) {
      addTexts(form);
      setForm("");
      setPage(page + 1);
      if (page === 3) setMissionStatus("Complete");
    } else if (type === 1) {
      await uploadImage();
      setMissionStatus("Complete");
    }
  };

  const step = type === 3 ? method[page - 1].split("\n")[0] : null;

  return (
    <Wrapper>
      <Container>
        <MissionQuote>{type === 3 && step}</MissionQuote>
        <MissionDesc>
          {type === 3
            ? method[page - 1]
                .split("\n")
                .filter((a) => a !== step)
                .join("\n")
            : method}
        </MissionDesc>
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
  font-family: "Bold";
  text-align: center;
  line-height: ${(props) => props.theme.font.normal};
  color: ${(props) => props.theme.color.black};
`;

const MissionDesc = styled.Text`
  padding: 0 10px;
  font-size: 16px;
  font-family: "Regular";
  text-align: center;
  line-height: ${(props) => props.theme.font.normal};
  color: ${(props) => props.theme.color.black};
`;
