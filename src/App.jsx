import './App.css';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import Input from './components/Input/Input';
import Header from './layout/Header/Header';

function App() {
  const onClick = (e) => {
    console.log(e);
  }; 

  return (
    <>
      <Header />
      <Title>Поиск</Title>
      <Button onClick={onClick}>Искать</Button>
      <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
      <Paragraph size='lg'>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
      <Input placeholder="Ваше имя" />
      <Input className="long-input" placeholder="Введите название" icon="search" />
    </>
  );
}

export default App;
