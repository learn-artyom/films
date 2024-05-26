import styles from "./UserBar.module.css";
import cn from "classnames";
import { useUser } from "../../hooks/use-user.hook";

export default function UserBar() {
  const { user, onLogout } = useUser();

  const logout = (e) => {
    e.preventDefault();
    onLogout();
  };

  if (user) {
    return (
      <>
        <a href="/" className={cn(styles["link"], styles["link-user"])}>
          {user?.name}
        </a>
        <a href="/" onClick={logout} className={styles["link"]}>
          Выйти
        </a>
      </>
    );
  }

  return (
    <a href="/" className={cn(styles["link"], styles["link-login"])}>
      Войти
    </a>
  );
}
