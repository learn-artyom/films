import UserBar from "../../components/UserBar/UserBar";
import styles from "./Header.module.css";
import cn from "classnames";

export default function Header({ user, onLogout }) {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__logo"]}>
        <img src="/logo.svg" />
      </div>
      <nav className={styles["header-nav"]}>
        <a href="/" className={cn(styles["header-nav__link"], styles["header-nav__link--active"])}>
          Поиск фильмов
        </a>
        <a href="/" className={styles["header-nav__link"]}>
          Мои фильмы
          <span className={styles["header-nav__counter-link"]}>2</span>
        </a>
        <UserBar user={user} onLogout={onLogout} />
      </nav>
    </header>
  );
}
