import './App.css';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
  return (
    <>
      <Title>Поиск</Title>
      <Button>Искать</Button>
      <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
      <Paragraph size='lg'>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
    </>
  );
}

export default App;
