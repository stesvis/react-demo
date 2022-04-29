import { Routes } from "../constants/routes";
import { StatusCodes } from "http-status-codes";
import { StorageProps } from "../constants/storageProps";
import { create } from "apisauce";
import localStorageService from "./localStorageService";
import logService from "./logService";
import sessionStorageService from "./sessionStorageService";
import { toast } from "react-toastify";

// define the api
const httpClient = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
  headers: {
    // Accept: "*/*",
    Accept: "applications/json",
  },
});

httpClient.addAsyncRequestTransform(async (request) => {
  const accessToken = sessionStorageService.getProperty(
    StorageProps.accessToken
  );

  // add the authorization token if present
  if (accessToken) request.headers["Authorization"] = `Bearer ${accessToken}`;
});

httpClient.axiosInstance.interceptors.response.use(
  // SUCCESS
  (response) => {
    // console.log("response", response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  // FAIL
  (error) => {
    console.log("HTTP error", error);

    if (error.response?.status === StatusCodes.UNAUTHORIZED) {
      localStorageService.clear();
      // redirect to log in
      // await authApiService.logOut(); // this creates an infinite loop because it always returns 401
      window.location = `${Routes.login}?status=${StatusCodes.UNAUTHORIZED}`;

      return error.response;
      // return Promise.reject(error.response);
    }

    const expectedError =
      error.response?.status >= 400 && error.response?.status < 500;

    if (!expectedError) {
      logService.log(error);
      toast.error(logService.extractErrorMessage(error), { theme: "colored" });
    }

    return error.response;
    // return Promise.reject(error.response);
  }
);

const httpDelete = async (url, params = {}, axiosConfig = {}) => {
  // console.log(url);
  const response = await httpClient.delete(url, params, axiosConfig);

  return response;
};

const httpGet = async (url, params = {}, axiosConfig = {}) => {
  // console.log(url);
  const response = await httpClient.get(url, params, axiosConfig);

  return response;
};

const httpPatch = async (url, data = {}, axiosConfig = {}) => {
  // console.log(url);
  const response = await httpClient.patch(url, data, axiosConfig);

  return response;
};

const httpPost = async (url, data = {}, axiosConfig = {}) => {
  // console.log(url);
  const response = await httpClient.post(url, data, axiosConfig);
  console.log(response);

  return response;
};

const httpPut = async (url, data = {}, axiosConfig = {}) => {
  // console.log(url);
  const response = await httpClient.put(url, data, axiosConfig);

  return response;
};

//-----------------------------------------//
const httpService = {
  get: httpGet,
  put: httpPut,
  patch: httpPatch,
  post: httpPost,
  delete: httpDelete,
};

export default httpService;
//-----------------------------------------//
