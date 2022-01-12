import "../styles/globals.css";
import { getFromLocalStorage } from "../_lib";
import NavBar from "../_nav";

process.browser
  ? (window.onload = () => {
      // document.body.style.animation = "appear 0.3s";
      // document.body.style.animationFillMode = "both";
      document.getElementsByTagName("main")[0].style.animationPlayState =
        "running";
    })
  : null;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <NavBar />
    </div>
  );
}

export default MyApp;
if (process.browser)
  if (getFromLocalStorage("theme") === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.add("light");
  }
