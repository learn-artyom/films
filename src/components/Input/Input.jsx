import styles from "./Input.module.css";
import cn from "classnames";
import { forwardRef } from "react";

export default forwardRef(function Input(
  { isValid = true, onChange, placeholder, className, icon, ...props },
  ref
) {
  return (
    <div className={cn(styles["input"], className)}>
      {icon && (
        <div
          className={cn(styles["input__icon"], styles[`input__icon--${icon}`])}
        ></div>
      )}
      <input
        className={cn(styles["input__element"], {
          [styles["input__element--invalid"]]: !isValid,
        })}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    </div>
  );
});
