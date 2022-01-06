import Image from "next/image";
import Link from "next/link";
import styles from "../styles/nav.module.css";
export default function NavBar() {
  return (
    <div className={styles.footerbox}>
      <Link href="/tasks">
        <Image className={styles.svg} width={36} height={60} src="/svg1.svg" />
      </Link>{" "}
      <Link href="/">
        <Image
          stroke="#000"
          className={styles.svg}
          width={36}
          height={60}
          src="/svg3.svg"
        />
      </Link>
      <Link href="/profile">
        <Image className={styles.svg} width={36} height={60} src="/svg2.svg" />{" "}
      </Link>{" "}
    </div>
  );
}
