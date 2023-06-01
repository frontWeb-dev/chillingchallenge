import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * 출석일
 * ["2023-06-01", "2023-06-02"]
 * 날짜가 문자열로 들어간 배열 형태로 저장할 것
 */

// 출석일 저장하기
export const setAttendance = async (date: string) => {
  try {
    const attendanceList = await AsyncStorage.getItem("attendance-state");
    if (attendanceList !== null ) {
      const attendanceArray = JSON.parse(attendanceList);
      if (attendanceArray.includes(date)) {
        return;
      } else {
        attendanceArray.push(date);
        await AsyncStorage.setItem("attendance-state", JSON.stringify(attendanceArray));
      };
    } else {
      const newAttendanceArray = [ date ];
      await AsyncStorage.setItem("attendance-state", JSON.stringify(newAttendanceArray));
    }
  } catch (error) {
    console.log(error);
  };
};

// 출석일 불러오기
export const getAttendance = async () => {
  try {
    const attendanceState = await AsyncStorage.getItem("attendance-state");
    if (attendanceState !== null) {
      return JSON.parse(attendanceState);
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return null;
  };
};