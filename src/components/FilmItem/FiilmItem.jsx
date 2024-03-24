
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './FilmItem.css';

function FilmItem({ title, poster, rating, isFavorite}) {
  return (
    <div className="film-item">
      <figure className="film-item__poster">
        <div className="film-item__rating">
          {rating}
        </div>
        <img className="film-item__image" src={poster} />
      </figure>
      <div className="film-item__title">{title}</div>
      <FavoriteButton isFavorite={isFavorite} />
    </div>
  );
}

export default FilmItem;