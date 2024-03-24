import styles from "./Input.module.css";
import cn from "classnames";

export default function Input({ onChange, placeholder, className, icon }) {
  return (
    <div className={cn(styles["input"], className)}>
      {icon && (
        <div
          className={cn(styles["input__icon"], styles[`input__icon--${icon}`])}
        ></div>
      )}
      <input
        className={styles["input__element"]}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
