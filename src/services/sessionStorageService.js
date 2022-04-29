//#region Token
const getProperty = (name) => {
  return JSON.parse(sessionStorage.getItem(name));
};

const setProperty = (name, value) => {
  sessionStorage.setItem(name, JSON.stringify(value));
  //   sessionStorage.setItem(name, JSON.stringify(value));
};

const removeProperty = (name) => {
  sessionStorage.removeItem(name);
  //   sessionStorage.removeItem(name);
};

const clear = () => {
  sessionStorage.clear();
  //   sessionStorage.removeItem(name);
};
//#endregion

const sessionStorageService = {
  clear,
  getProperty,
  removeProperty,
  setProperty,
};

export default sessionStorageService;
