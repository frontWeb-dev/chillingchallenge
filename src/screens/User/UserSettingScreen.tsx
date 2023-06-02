import React, { useState} from "react";
import { View, Text } from "react-native";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Margin from "../../components/Margin";
import ImageUploader from "../../components/imageUpload/ImageUploader";
import UserInfo from "../../components/profile/UserInfo";
import LongButton from "../../components/profile/LongButton";

const UserSettingScreen: React.FC = () => {
  const [imageSelected, setImageSelected] = useState("");

  return (
    <>
      <Layout>
        <Header text="사용자 정보 수정"/>
        <Margin props={30} />
        <ImageUploader
          setImageSelected={setImageSelected}
          uploaderType="PROFILE"
        />
        <Margin props={30} />
        <UserInfo
          name="김아무개"
          email="amoogae@naver.com"
        />
        <Margin props={30} />
        <LongButton />
        <Margin props={100} />
      </Layout>
    </>
  );
};

export default UserSettingScreen;