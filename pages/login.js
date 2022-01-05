import styles from "../styles/login.module.css";
import { saveToLocalStorage as sLS } from "./_lib";

export default function Home() {
  return (
    <>
      <form className={styles.formBox}>
        <input id="name" required type="name" placeholder="Ваше имя" />
      </form>
      <button
        onClick={() => {
          sLS("name", document.getElementById("name").value);
          window.location.replace("/");
        }}
        className={styles.button}
      >
        Готово
      </button>{" "}
    </>
  );
}
