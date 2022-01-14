import styles from "../styles/tasks.module.css";
import Image from "next/image";
import {
  animatedLink,
  getFromLocalStorage as gLS,
  saveToLocalStorage as sLS,
} from "../_lib";
import { useState, useEffect } from "react";

export default function Home() {
  let doneTasks = 0;
  const [tasks, setTasks] = useState([]);
  let DTC = 0;
  tasks !== null
    ? tasks.forEach((e) => {
        if (e.done === true) {
          DTC = DTC + 1;
        }
      })
    : null;
  useEffect(() => {
    setTasks(process.browser ? JSON.parse(gLS("tasks")) : null);
  }, []);

  return (
    <>
      <main>
        <div className={styles.headerbox}>
          <div>
            <Image
              src="/characters/felix/1.png"
              height="150px"
              width="130px"
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
          <h2 style={{ paddingTop: 25, paddingLeft: "10%", textAlign: "left" }}>
            Мои Задания
          </h2>{" "}
          <div className={styles.firsttaskbox}>
            {process.browser > null && tasks !== null && tasks.length > 0 ? (
              <>
                <div className={styles.taskline}>
                  <div
                    className={styles.tasklinegrad}
                    style={{
                      width: String((DTC / tasks.length) * 100) + "%",
                    }}
                  />
                </div>
                <p className={styles.tasktext}>
                  У тебя {tasks.length} задач(и) на сегодня, из них{" "}
                  {typeof tasks.map === "function"
                    ? tasks.map((e) => {
                        if (e.done === true) doneTasks = doneTasks + 1;
                      })
                    : null}
                  {doneTasks} завершены.
                </p>
              </>
            ) : (
              <></>
            )}
          </div>
          <ul className={styles.secondtaskbox}>
            {process.browser > null && tasks !== null && tasks.length > 0 ? (
              typeof tasks.map === "function" ? (
                tasks.map((e) => {
                  return (
                    <>
                      <div
                        key={e.value}
                        onClick={() => {
                          const newTasks = tasks;
                          let index = tasks.indexOf(e);
                          if (!e.done) {
                            newTasks[index].done = true;
                          } else {
                            newTasks[index].done = false;
                          }
                          sLS("tasks", JSON.stringify(newTasks));
                          setTasks(JSON.parse(gLS("tasks")));
                        }}
                        className={
                          e.done ? styles.flextaskboxdone : styles.flextaskbox
                        }
                      >
                        <p className={styles.task}>{e.value}</p>
                        <div
                          className={
                            e.done ? styles.circledone : styles.circlepending
                          }
                        ></div>
                      </div>
                    </>
                  );
                })
              ) : null
            ) : (
              <p style={{ textAlign: "center", marginTop: "40%" }}>
                Ты ещё не создал ни одного задания!
              </p>
            )}
          </ul>
        </div>
        <button
          className={styles.button}
          onClick={() => {
            animatedLink("/newtask");
          }}
        >
          Добавить задачу
        </button>
      </main>
    </>
  );
}
