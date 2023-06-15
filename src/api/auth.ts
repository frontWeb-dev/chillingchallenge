import { API } from "./token";

const BASE_URL = `http://ec2-3-37-214-191.ap-northeast-2.compute.amazonaws.com:8080/api/v1/auth`;
// const BASE_URL = `http://localhost:8080/api/v1/auth`;

interface signUpBody {
  email: string;
  password: string;
  nickName: string;
}

interface signInBody {
  email: string;
  password: string;
}

export const signUpAPI = async (data: signUpBody) => {
  const response = await API.post(`${BASE_URL}/signup/form`, data);

  return response.data;
};

export const signInAPI = async (data: signInBody) => {
  const response = await API.post(`${BASE_URL}/login/form`, data);

  return response.data;
};
