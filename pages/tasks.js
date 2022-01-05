import styles from "../styles/tasks.module.css";
import Image from "next/image";
import { getFromLocalStorage as gLS, saveToLocalStorage as sLS } from "./_lib";

export default function Home() {
  return (
    <>
      <main>
        {" "}
        <div className={styles.headerbox}>
          <div>
            <Image
              src="/character.png"
              height="97.8px"
              width="81.6px"
              className={styles.goblin}
            />
          </div>
          <div className={styles.goblintext}>
            <div className={styles.gtextbox}>
              <p className={styles.gtext}>
                Здесь ты можешь создать список дел на сегодня.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.taskbox}>
          {" "}
          <div className={styles.firsttaskbox}>
            {process.browser > null &&
            gLS("tasks") > null &&
            JSON.parse(gLS("tasks")).length > 0 ? (
              <>
                <div className={styles.taskline}>
                  <div className={styles.tasklinefilled} />
                </div>
                <p className={styles.tasktext}>
                  У тебя 18 задач на сегодня, из них 5 завершены.
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.secondtaskbox}>
            {/*process.browser > null &&
            gLS("tasks") > null &&
            JSON.parse(gLS("tasks")).length > 0 ? (
              <>{}</>
            ) : (
              <p style={{ textAlign: "center", marginTop: "40%" }}>
                Ты ещё не создал ни одного задания!
              </p>
            )*/}

            <div className={styles.secondtaskbox}>
              <div className={styles.flextaskbox}>
                <p className={styles.task}>Протереть пыль</p>
                <div className={styles.circlepending}></div>
              </div>
              <div className={styles.flextaskboxdone}>
                <p className={styles.task}>Протереть пыль</p>
                <div className={styles.circledone}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
