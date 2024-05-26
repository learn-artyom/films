import "./App.css";
import Header from "./layout/Header/Header";
import FilmsList from "./components/FilmsList/FilmsList";
import Body from "./layout/Body/Body";
import SearchSection from "./components/SearchSection/SearchSection";
import LoginForm from "./components/LoginForm/LoginForm";
import { UserContextProvider } from "./context/user.context";

function App() {
  return (
    <UserContextProvider>
      <Header />
      <Body>
        <LoginForm />
        <SearchSection />
        <FilmsList />
      </Body>
    </UserContextProvider>
  );
}

export default App;
