import styles from "./SearchSection.module.css";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import Input from "../Input/Input";

export default function SearchSection() {
  return (
    <div className={styles["search-section"]}>
      <div className={styles["search-section__content"]}>
        <Title>Поиск</Title>
        <Paragraph>
          Введите название фильма, сериала или мультфильма для поиска и
          добавления в избранное.
        </Paragraph>
      </div>
      <div className={styles["search-section__control"]}>
        <Input
          className={styles["long-input"]}
          placeholder="Введите название"
          icon="search"
        />{" "}
        <Button>Искать</Button>
      </div>
    </div>
  );
}
