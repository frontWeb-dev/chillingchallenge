import { API } from "./token";

const BASE_URL = `http://ec2-3-37-214-191.ap-northeast-2.compute.amazonaws.com:8080/api/v1`;

export const getUserInfoAPI = async (code: string) => {
  const response = await API.get(`${BASE_URL}/auth/showMyInfo?code=${code}`);
  console.log(response);
  return response.data;
};

export const updateProfileAPI = async (code: string) => {
  const response = await API.put(`${BASE_URL}/update/imageUrl/${code}`);

  return response.data;
};

export const updateNicknameAPI = async (code: string) => {
  const response = await API.put(`${BASE_URL}/update/nickname/${code}`);

  return response.data;
};
