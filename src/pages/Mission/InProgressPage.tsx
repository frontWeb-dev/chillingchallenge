import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";

import { useImageStore, useLongTextStore } from "@store/store";
import { storage } from "../../../firebaseConfig";

import ImageUploader from "@components/imageUpload/ImageUploader";
import TextUploader from "@components/TextUpload/TextUploader";
import LongButton from "@components/mission/LongButton";

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

  const { uri, addUri, clearUri } = useImageStore(); // 이미지 uri 전역 상태 저장
  const { texts, addTexts, clearTexts } = useLongTextStore(); // 텍스트 전역 상태 저장

  // 사진 업로드 함수
  const uploadImage = async () => {
    try {
      if (imageSelected) {
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

        await uploadBytes(storageRef, blob).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            console.log("파이어 베이스에 업로드된 uri 주소: ", url);
            addUri(url);
          });
        });
        console.log("이미지가 성공적으로 업로드되었습니다!");
      }
    } catch (error) {
      console.error("파이어 베이스 스토리지 에러:", error);
    }
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
  font-family: "Regular";
  text-align: center;
  line-height: ${(props) => props.theme.font.normal};
  color: ${(props) => props.theme.color.black};
`;

const FormContainer = styled.View`
  padding: 0 10px;
`;
