// import apiService from "./api/apiServices";

import localStorageService from "./localStorageService";
import logService from "./logService";
import sessionStorageService from "./sessionStorageService";

/**
 * This is just a container of all the available services in the app
 */
//------------------------------------------------
const appServices = {
  // api: apiService,
  localStorage: localStorageService,
  sessionStorage: sessionStorageService,
  log: logService,
};

export default appServices;
//------------------------------------------------
