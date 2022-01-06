import "../styles/globals.css";
import { getFromLocalStorage } from "../_lib";
import NavBar from "../_nav";

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
