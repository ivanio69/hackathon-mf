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

export const getWaifuSprites = (spriteNumber) => {
  let waifuIndex = 0;
  if (process.browser) {
    if (getFromLocalStorage("waifuIndex") == null) {
      Number(saveToLocalStorage("waifuIndex", 0));
      waifuIndex = 0;
    } else waifuIndex = Number(getFromLocalStorage("waifuIndex"));
    console.log(waifuIndex);
    // waifuIndex = 0;

    switch (waifuIndex) {
      case 0: {
        switch (spriteNumber) {
          case 1: {
            return "/characters/felix/1.png";
          }
          case 2: {
            return "/characters/felix/2.png";
          }
        }
      }
      case 1: {
        return "/characters/mai/1.png";
      }
      case 2: {
        return "/characters/senko/1.png";
      }
    }
  } else {
    return "/404";
  }
};

export default function Lib() {
  return (
    <>
      <p>This is library file.</p>
    </>
  );
}
