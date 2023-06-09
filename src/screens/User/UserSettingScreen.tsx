import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";

import { storage } from "../../../firebaseConfig";
import { setProfileImage } from "@utils/ProfileImage";

import Header from "@components/Header";
import Layout from "@components/Layout";
import Margin from "@components/Margin";
import ImageUploader from "@components/imageUpload/ImageUploader";
import LongButton from "@components/profile/LongButton";
import UserInfo from "@components/profile/UserInfo";

const UserSettingScreen: React.FC = () => {
  const [imageSelected, setImageSelected] = useState(""); // state: 선택한 사진

  // 프로필 사진 업로드
  const uploadFile = async () => {
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
            setProfileImage(url);
            console.log(url);
          });
        });
        console.log("File uploaded successfully");
      }
    } catch (error) {
      console.error("Firebase Storage Error:", error);
    }
  };

  // 수정 버튼 함수
  const handlePress = () => {
    uploadFile();
  };

  return (
    <>
      <Layout>
        <Header text="사용자 정보 수정" />
        <Margin props={80} />
        <ImageUploader setImageSelected={setImageSelected} uploaderType="PROFILE" />
        <Margin props={50} />
        <UserInfo name="김아무개" email="amoogae@naver.com" />
        <Margin props={20} />
        <LongButton handlePress={handlePress} />
        <Margin props={100} />
      </Layout>
    </>
  );
};

export default UserSettingScreen;
