import axios from "axios";
import axiosClient from "./axiosInterceptor";
import { AUTH_KEY } from "@/constants/authKey";
import authorization from "@/libs/authorization";
import sessionStorageService from "@/libs/sessionStorage";
import { SESSION_KEY } from "@/constants/session";

export const sendApi = {
  get: (url: string) => {
    return axiosClient.get(AUTH_KEY.apiUrl + url);
  },
  post: (url: string, req: object = {}) => {
    return axiosClient.post(
      AUTH_KEY.apiUrl + url,
      req,
      authorization(sessionStorageService.get(SESSION_KEY, "accessToken"))
    );
  },

  put: (url: string, req: object = {}) => {
    return axiosClient.put(
      AUTH_KEY.apiUrl + url,
      req,
      authorization(sessionStorageService.get(SESSION_KEY, "accessToken"))
    );
  },

  delete: (url: string) => {
    return axiosClient.delete(
      AUTH_KEY.apiUrl + url,
      authorization(sessionStorageService.get(SESSION_KEY, "accessToken"))
    );
  },
};

export default sendApi;
