import "../styles/globals.css";
import { getFromLocalStorage } from "./_lib";
import NavBar from "./pages/_nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NavBar />
    </>
  );
}

export default MyApp;
if (process.browser)
  if (getFromLocalStorage("theme") === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.add("light");
  }
