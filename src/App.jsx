import './App.css';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import Input from './components/Input/Input';
import Header from './layout/Header/Header';
import FilmsList from './components/FilmsList/FilmsList';

function App() {


  return (
    <>
      <Header />
      <Title>Поиск</Title>
      <Button>Искать</Button>
      <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
      <Paragraph size='lg'>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
      <Input placeholder="Ваше имя" />
      <Input className="long-input" placeholder="Введите название" icon="search" />

      <FilmsList />
    </>
  );
}

export default App;
