import Image from "next/image";
import { animatedLink } from "./_lib";
import styles from "./styles/nav.module.css";
export default function NavBar() {
  return (
    <>
      <div className={styles.footerbox}>
        <Image
          onClick={() => {
            animatedLink("/tasks");
          }}
          className={styles.svg}
          width={36}
          height={60}
          src="/svg1.svg"
        />
        <Image
          onClick={() => {
            animatedLink("/");
          }}
          stroke="#000"
          className={styles.svg}
          width={36}
          height={60}
          src="/svg3.svg"
        />
        <Image
          onClick={() => {
            animatedLink("/profile");
          }}
          className={styles.svg}
          width={36}
          height={60}
          src="/svg2.svg"
        />
      </div>
    </>
  );
}
