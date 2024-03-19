import './FavoriteButton.css';

function FavoriteButton({ isFavorite }) {
  const className = `favorite-button ${isFavorite ? 'favorite-button--favorite' : ''}`;

  return  (
    <button className={className}>
      {isFavorite ? 'В избранном' : 'В избранное'}
    </button>
  );
}

export default FavoriteButton;