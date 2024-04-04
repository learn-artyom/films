import "./App.css";
import Header from "./layout/Header/Header";
import FilmsList from "./components/FilmsList/FilmsList";
import Body from "./layout/Body/Body";
import SearchSection from "./components/SearchSection/SearchSection";
import LoginForm from "./components/LoginForm/LoginForm";
import { useLocalStorage } from "./hooks/use-localstorage.hook";

function App() {
  const [users, setUsers] = useLocalStorage("users");
  const usersList = Array.isArray(users) ? [...users] : [];
  const currentUser = usersList.find((item) => item.isLogined === true);

  const onLogin = (user) => {
    const userIdx = usersList.findIndex((item) => item.name.toLowerCase() === user.toLowerCase());

    if (userIdx >= 0) {
      usersList[userIdx].isLogined = true;
    } else {
      usersList.push({ name: user, isLogined: true });
    }

    setUsers(usersList);
  };

  const onLogout = () => {
    setUsers(usersList.map((item) => ({ ...item, isLogined: false })));
  };

  return (
    <>
      <Header user={currentUser} onLogout={onLogout} />
      <Body>
        <LoginForm onSumbit={onLogin} />
        <SearchSection />
        <FilmsList />
      </Body>
    </>
  );
}

export default App;
