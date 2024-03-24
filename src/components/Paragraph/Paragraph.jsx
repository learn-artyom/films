import styles from "./Paragraph.module.css";
import cn from "classnames";

export default function Paragraph({ children, size = "sm" }) {
  return (
    <p
      className={cn(styles["paragraph"], {
        [styles[`paragraph--${size}`]]: size,
      })}
    >
      {children}
    </p>
  );
}
