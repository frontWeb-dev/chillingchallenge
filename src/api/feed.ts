import { API } from "./token";

const BASE_URL = `http://ec2-3-37-214-191.ap-northeast-2.compute.amazonaws.com:8080/api/v1`;
// const BASE_URL = `http://localhost:8080/api/v1`;

interface uploadFeedBody {
  missionId: number;
  missionType: number;
  stringAndPath: string[];
  usercode: string;
}

export const getFeedAPI = async (code: string, page: number) => {
  const response = await API.get(`${BASE_URL}/auth/showMyHistory?code=${code}&page=${page}&size=5`);
  return response.data;
};

export const uploadFeedAPI = async (data: uploadFeedBody) => {
  const response = await API.post(`${BASE_URL}/mission/completeMission`, [data]);

  return response.data;
};
