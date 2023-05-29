import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/core";

import { Ionicons } from '@expo/vector-icons'; 

import { UserNavigatorParamList } from "../../navigations/UserNavigator";

interface ProfileProps {
  username: string;
  registerDate: number;
  missionNumber: number;
}

const Profile: React.FC<ProfileProps> = ({ username, registerDate, missionNumber }) => {
  const navigation = useNavigation<UserNavigatorParamList>();

  const handleSettingButtonPress = () => {
    navigation.navigate("UserSettingScreen");
  }


  return (
    <>
      <ProfileContainer>
        <ProfileImage source={{uri: "https://picsum.photos/seed/picsum/65/65"}}/>
        <ProfileTextContainer>
          <DateText>
            함께한 지 {registerDate}일
          </DateText>
          <UsernameText>
            {username}
          </UsernameText>
          <MissionText>
            {missionNumber}개의 칠링챌링을 완료하셨군요!
          </MissionText>
        </ProfileTextContainer>
        <SettingButton
          onPress={() => handleSettingButtonPress()}
        >
          <Ionicons name="settings-sharp" size={25} color="#909090" />
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
  gap: 20px;
`;

const ProfileImage = styled.Image`
  width: 65px;
  height: 65px;
  resize-mode: cover;
  border-radius: 12px;
`;

const ProfileTextContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6.5px;
`;

const UsernameText = styled.Text`
  font-size: 20px;
  font-family: "ExtraBold";
`;

const DateText = styled.Text`
  color: #909090;
  font-size: 10px;
  font-family: "Regular";
`;

const MissionText = styled.Text`
  font-size: 12px;
  font-family: "Regular";
`;

const SettingButton = styled.TouchableOpacity`
  active-opacity: 0.8;
`;