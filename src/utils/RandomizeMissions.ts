import AsyncStorage from "@react-native-async-storage/async-storage";

import { editedMissions } from "@mocks/missions";

// 미션 무작위 추출한 객체 리턴
export const randomizeMissions = () => {
  var numbers: number[] = [];

  while (numbers.length < 3) {
    var randomNumber = Math.floor(Math.random() * editedMissions.length) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  const selectedMissions = numbers.map((number) =>
    editedMissions.find((mission) => mission.id === number)
  );

  AsyncStorage.setItem("random-mission", JSON.stringify(selectedMissions));

  return selectedMissions;
};

/**
 * 무작위 추출 미션 객체 저장 방식
 * 객체에 담아 {} 저장
 * */

// 랜덤 미션 불러오기
export const loadRandomMissions = async () => {
  try {
    const randomMission = await AsyncStorage.getItem("random-mission");

    if (randomMission !== null) {
      return JSON.parse(randomMission);
    } else {
      return randomizeMissions();
    }
  } catch (error) {
    console.log(error);
  }
};
