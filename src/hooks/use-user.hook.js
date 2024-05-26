import { useLocalStorage } from "./use-localstorage.hook";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/user.context";

export function useUser() {
  const [users, updateUsers] = useLocalStorage("users");
  const { user, setUser } = useContext(UserContext);

  const usersList = Array.isArray(users) ? [...users] : [];
  const currentUser = usersList.find((item) => item.isLogined === true) ?? null;

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser, setUser]);

  const onLogin = (userName) => {
    const loggedUser = { name: userName, isLogined: true };
    const userIdx = usersList.findIndex(
      (item) => item.name.toLowerCase() === userName.toLowerCase()
    );

    if (userIdx >= 0) {
      usersList[userIdx] = { ...loggedUser };
    } else {
      usersList.push(loggedUser);
    }

    setUser(loggedUser);
    updateUsers(usersList);
  };

  const onLogout = () => {
    updateUsers(usersList.map((item) => ({ ...item, isLogined: false })));
    setUser(null);
  };

  return { user, onLogin, onLogout };
}
