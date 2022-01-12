import "../styles/globals.css";
import { getFromLocalStorage } from "../_lib";
import NavBar from "../_nav";
import Head from "next/head";
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
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/ios/192x192.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
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
