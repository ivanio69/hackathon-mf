const prefix = "MFH-";

export const getFromLocalStorage = (key) => {
  return localStorage.getItem(prefix + key);
};

export const saveToLocalStorage = (key, value) => {
  return localStorage.setItem(prefix + key, value);
};

export const animatedLink = (link) => {
  document.getElementsByTagName("main")[0].style.animation = "disappear 0.3s";
  window.location.href = link;
};

export default function Lib() {
  return (
    <>
      <p>This is library file.</p>
    </>
  );
}
