const prefix = "MFH-";

export const getFromLocalStorage = (key) => {
  return localStorage.getItem(prefix + key);
};

export const saveToLocalStorage = (key, value) => {
  return localStorage.setItem(prefix + key, value);
};

export default function Lib() {
  return (
    <>
      <p>This is library file.</p>
    </>
  );
}
