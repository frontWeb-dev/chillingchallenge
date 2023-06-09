import React, { useState, useCallback } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { UserNavigatorParamList } from "@navigations/UserNavigator";
import { getProfileImage } from "@utils/ProfileImage";

interface ProfileProps {
  username: string;
  registerDate: number;
  missionNumber: number;
}

const Profile: React.FC<ProfileProps> = ({ username, registerDate, missionNumber }) => {
  const [ imageUri, setImageUri ] = useState("");
  const navigation = useNavigation<UserNavigatorParamList>(); // navigation: 사용자 설정 화면 이동

  // 사용자 설정 화면 버튼 함수
  const handleSettingButtonPress = () => {
    navigation.navigate("UserSettingScreen");
  };

  // 프로필 사진 Async-Storage에서 불러오기
  useFocusEffect(
    React.useCallback(() => {
      const loadImage = async () => {
        const uri = await getProfileImage();
        setImageUri(uri);
        console.log("되어라", imageUri, uri);
      };
      loadImage();
    }, [])
  );

  return (
    <>
      <ProfileContainer>
        <ProfileImage
          resizeMode="cover"
          source={{ uri: imageUri === "" ? "https://picsum.photos/seed/picsum/65/65" : imageUri }}
        />
        <ProfileTextContainer>
          <UsernameText>{username}</UsernameText>
          <DateText>칠링챌링과 함께한 지 {registerDate}일째</DateText>
        </ProfileTextContainer>
        <SettingButton activeOpacity={0.8} onPress={() => handleSettingButtonPress()}>
          <Ionicons name="settings-sharp" size={25} color="#fff" />
        </SettingButton>
      </ProfileContainer>
    </>
  );
};

export default Profile;

// styled
const ProfileContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

const ProfileImage = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 12px;
`;

const ProfileTextContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

const UsernameText = styled.Text`
  font-size: 20px;
  font-family: "Bold";
  line-height: ${(props) => props.theme.font.title};
  color: ${(props) => props.theme.color.white};
`;

const DateText = styled.Text`
  color: ${(props) => props.theme.color.white};
  font-size: 13px;
  font-family: "Regular";
  line-height: ${(props) => props.theme.font.smaller};
`;

const MissionText = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  font-family: "Regular";
  line-height: ${(props) => props.theme.font.small};
  color: ${(props) => props.theme.color.white};
`;

const SettingButton = styled.TouchableOpacity``;
