const prefix = "MFH-";

export const getFromLocalStorage = (key) => {
  return localStorage.getItem(prefix + key);
};

export const saveToLocalStorage = (key, value) => {
  return localStorage.setItem(prefix + key, value);
};
