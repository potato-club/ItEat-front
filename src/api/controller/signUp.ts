import axios from "axios";
import sendApi from "../sendApi";

export const signUp = async (
  nickName: string,
  email: string,
  password: string,
  tags: string
) => {
  const response = await axios.post("https://eat--it.shop/client/signup", {
    nickName,
    email,
    password,
    tags,
  });
  return response.data;
};
