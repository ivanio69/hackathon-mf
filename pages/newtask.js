import styles from "../styles/newtask.module.css";
import { getFromLocalStorage as gLS, saveToLocalStorage as sLS } from "../_lib";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1>Создать новую Задачу</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (process.browser) {
              const value = document.getElementById("taskdata").value;
              if (gLS("tasks") !== null) {
                const newTasks = JSON.parse(gLS("tasks"));
                newTasks.push({ value, done: false });
                newTasks = JSON.stringify(newTasks);
                sLS("tasks", newTasks);
              } else {
                const newTasksArr = [];
                newTasksArr.push({ value, done: false });
                sLS("tasks", JSON.stringify(newTasksArr));
              }
              window.location.href = "/tasks";
            }
          }}
        >
          <input
            required
            className={styles.input}
            id="taskdata"
            placeholder="Что ты хочешь достичь?"
          />
          <input type="submit" className={styles.button} value="Сохранить" />
        </form>
      </div>
    </>
  );
}
