import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * 프로필 이미지 저장 방식
 * string 값으로 저장
 * */ 

// 프로필 이미지 저장하기
export const setProfileImage = async (url: string) => {
  try {
    await AsyncStorage.setItem("profile-image", url);
  } catch (error) {
    console.log(error);
  };
};

// 프로필 이미지 불러오기 
export const getProfileImage = async () => {
  try {
    const profileImage = await AsyncStorage.getItem("profile-image");
    if (profileImage !== null) {
      return profileImage;
    } else {
      return "";
    }
  } catch (error) {
    console.log(error);
    return "";
  };
};