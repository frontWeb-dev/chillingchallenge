import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * 미션 상태 저장 방식
 * 객체로 { el.id: 0, el.id: 1, el.id: 2} 이런 식으로 저장
 * 0: 시작 전
 * 1: 진행 중
 * 2: 진행 완료
 * */ 

// 미션 상태 저장하기
export const setMissionState =  async (missionState: string) => {
  try {
    await AsyncStorage.setItem("mission-state", missionState);
  } catch (e) {
    console.log(e);
  };
};


// 미션 상태 불러오기
export const getMissionState = async () => {
  try {
    const missionState = await AsyncStorage.getItem("mission-state");
    if (missionState !== null) {
      return missionState;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  };
};

