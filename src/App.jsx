import './App.css';
import Header from './layout/Header/Header';
import Title from './components/Title/Title';
import FilmsList from './components/FilmsList/FilmsList';
import Body from './layout/Body/Body';
import SearchSection from './components/SearchSection/SearchSection';

function App() {


  return (
    <>
      <Header />
      <Body>
        <SearchSection />
        <FilmsList />
      </Body>
  
    </>
  );
}

export default App;
