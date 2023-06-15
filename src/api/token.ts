import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const API = axios.create({});

// 요청 보내기 전에 수행할 일
API.interceptors.request.use(async (res) => {
  const accessToken = await AsyncStorage.getItem("user-token");

  if (accessToken) {
    res.headers!["Content-Type"] = "application/json;charset=UTF-8";
    res.headers!["Authorization"] = `Bearer ${accessToken}`;
  }
  return res;
});
