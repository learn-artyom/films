import './SearchSection.css';
import Title from '../Title/Title';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import Input from '../Input/Input';

function SearchSection() {
  return (
    <div className="search-section">
      <div className="search-section__content">
        <Title>Поиск</Title>
        <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
      </div>
      <div className="search-section__control">
        <Input className="long-input" placeholder="Введите название" icon="search" /> <Button>Искать</Button>
      </div>
    </div>
  );
}

export default SearchSection;