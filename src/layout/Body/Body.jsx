import styles from "./Body.module.css";

export default function Body({ children }) {
  return <main className={styles["body"]}>{children}</main>;
}
