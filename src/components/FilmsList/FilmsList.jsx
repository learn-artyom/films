import FilmItem from '../FilmItem/FiilmItem';
import './FilmsList.css';

const FILMS = [
  {
    id: '1',
    title: 'Black Widow',
    poster: '/posters/film_1.png',
    rating: 324,
    isFavorite: false
  },
  {
    id: '2',
    title: 'Shang Chi',
    poster: '/posters/film_2.png',
    rating: 124,
    isFavorite: false
  },
  {
    id: '3',
    title: 'Loki',
    poster: '/posters/film_3.png',
    rating: 235,
    isFavorite: false
  },
  {
    id: '4',
    title: 'How I Met Your Mother',
    poster: '/posters/film_4.png',
    rating: 345,
    isFavorite: false
  },
  {
    id: '5',
    title: 'Money Heist',
    poster: '/posters/film_5.png',
    rating: 8125,
    isFavorite: true
  },
  {
    id: '6',
    title: 'Friends',
    poster: '/posters/film_6.png',
    rating: 124,
    isFavorite: false
  },
  {
    id: '7',
    title: 'The Big Bang Theory',
    poster: '/posters/film_7.png',
    rating: 235,
    isFavorite: false
  },
  {
    id: '8',
    title: 'Two And a Half Men',
    poster: '/posters/film_8.png',
    rating: 123,
    isFavorite: false
  }
];

function FilmsList() {
  return (
    <div className="films-list">
      {FILMS.map((item) => <FilmItem 
        key={item.id} 
        title={item.title} 
        poster={item.poster} 
        rating={item.rating}
        isFavorite={item.isFavorite} 
      />)}
    </div>
  );
}

export default FilmsList;