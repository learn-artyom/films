import styles from "./FavoriteButton.module.css";
import cn from "classnames";

export default function FavoriteButton({ isFavorite }) {
  return (
    <button
      className={cn(styles["favorite-button"], {
        [styles["favorite-button--favorite"]]: isFavorite,
      })}
    >
      {isFavorite ? "В избранном" : "В избранное"}
    </button>
  );
}
