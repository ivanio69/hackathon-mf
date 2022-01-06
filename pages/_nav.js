import Image from "next/image";
import styles from "../styles/nav.module.css";
export default function NavBar() {
  return (
    <div className={styles.footerbox}>
      <a href="/tasks">
        <Image className={styles.svg} width={36} height={60} src="/svg1.svg" />
      </a>{" "}
      <a href="/">
        <Image
          stroke="#000"
          className={styles.svg}
          width={36}
          height={60}
          src="/svg3.svg"
        />
      </a>
      <a href="/profile">
        <Image className={styles.svg} width={36} height={60} src="/svg2.svg" />{" "}
      </a>{" "}
    </div>
  );
}
