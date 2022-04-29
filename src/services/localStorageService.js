function getProperty(name) {
  return JSON.parse(localStorage.getItem(name));
}

function setProperty(name, value) {
  localStorage.setItem(name, JSON.stringify(value));
  //   sessionStorage.setItem(name, JSON.stringify(value));
}

function removeProperty(name) {
  localStorage.removeItem(name);
  //   sessionStorage.removeItem(name);
}
function clear() {
  localStorage.clear();
  //   sessionStorage.removeItem(name);
}

//------------------------------------------------
const localStorageService = {
  getProperty,
  setProperty,
  removeProperty,
  clear,
};

export default localStorageService;
//------------------------------------------------
