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
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  width: 100%;
  gap: 20px;
`;

const ProfileImage = styled.Image`
  width: 65px;
  height: 65px;
  resizeMode: cover;
  borderRadius: 12px;
`;

const ProfileTextContainer = styled.View`
  flex: 1;
  display: flex;
  flexDirection: column;
  justifyContent: space-between;
  gap: 6.5px;
`;

const UsernameText = styled.Text`
  fontSize: 20px;
  fontFamily: "ExtraBold";
`;

const DateText = styled.Text`
  color: #909090;
  fontSize: 10px;
  fontFamily: "Regular";
`;

const MissionText = styled.Text`
  fontSize: 12px;
  fontFamily: "Regular";
`;

const SettingButton = styled.TouchableOpacity`
  activeOpacity: 0.8;
`;