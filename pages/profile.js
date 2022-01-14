import { useEffect, useState } from "react";
import styles from "../styles/profile.module.css";
import { getFromLocalStorage, saveToLocalStorage } from "../_lib";

export default function Profile() {
  const [waifuIndex, setWaifuIndex] = useState(0);
  useEffect(() => {
    setWaifuIndex(Number(getFromLocalStorage("waifuIndex")));
  }, []);
  return (
    <>
      <div>
        <main>
          <div className={styles.accava}></div>
          <p className={styles.username}>
            {process.browser ? getFromLocalStorage("name") : null}
          </p>
          <div className={styles.intervalbox}>
            <div className={styles.intointerval}>
              <p className={styles.intervaltext}>
                Интервал уведомлений о бездействии:
              </p>
              <p>Скоро...</p>
            </div>
          </div>
          <div className={styles.accseebox}>
            <div className={styles.intointerval}>
              <p className={styles.accseetext}>Видимость аккаунта:</p>
              <p>Скоро...</p>
            </div>
          </div>
          <div className={styles.coffeebox}>
            <div className={styles.intointerval}>
              <p className={styles.coffeetext}>Приготовить кофе:</p>
              <div className={styles.coffeeflexbox}>
                <div>
                  <img src="./img/Ellipse 11.png" alt="" />
                  <p>Да</p>
                </div>
                <div>
                  <img src="./img/Group 7.png" alt="" />
                  <p>Нет</p>
                </div>
              </div>
              <p>а мы такого не умеем:(</p>
            </div>
          </div>
          <button
            className={styles.button}
            onClick={() => {
              if (getFromLocalStorage("theme") === "light")
                saveToLocalStorage("theme", "dark");
              else saveToLocalStorage("theme", "light");
              window.location.reload();
            }}
          >
            Сменить тему
          </button>
          <h2>Выбрать вайфу</h2>
          <select
            className={styles.select}
            onChange={(e) => {
              saveToLocalStorage("waifuIndex", e.target.options.selectedIndex);
            }}
          >
            <option selected={waifuIndex === 0 ? true : false}>
              Феликс Аргайл
            </option>
            <option selected={waifuIndex === 1 ? true : false}>
              Май Сакурадзима
            </option>
            <option selected={waifuIndex === 2 ? true : false}>Сенко</option>
          </select>
        </main>
      </div>
    </>
  );
}
