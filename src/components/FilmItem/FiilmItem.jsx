import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styles from "./FilmItem.module.css";

export default function FilmItem({ title, poster, rating, isFavorite }) {
  return (
    <div className={styles["film-item"]}>
      <figure className={styles["film-item__poster"]}>
        <div className={styles["film-item__rating"]}>{rating}</div>
        <img className={styles["film-item__image"]} src={poster} />
      </figure>
      <div className={styles["film-item__title"]}>{title}</div>
      <FavoriteButton isFavorite={isFavorite} />
    </div>
  );
}
