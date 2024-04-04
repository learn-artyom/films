import styles from "./LoginForm.module.css";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useEffect, useReducer, useRef } from "react";
import {
  CLEAR_ACTION,
  INITAL_STATE,
  loginFormReducer,
  RESET_VALIDITY,
  SET_VALUE_ACTION,
  SUMBIT_ACTION
} from "./LoginForm.state";

export default function LoginForm({ onSumbit }) {
  const [formState, dispatchForm] = useReducer(loginFormReducer, INITAL_STATE);
  const { value, isValid, isFormReadyToSubmit } = formState;
  const loginRef = useRef();

  const userLogin = (e) => {
    e.preventDefault();
    dispatchForm({ type: SUMBIT_ACTION });
  };

  const onChange = (e) => {
    dispatchForm({ type: SET_VALUE_ACTION, payload: e.target.value });
  };

  useEffect(() => {
    let timeId;
    if (!isValid) {
      loginRef.current.focus();
      timeId = setTimeout(() => {
        dispatchForm({ type: RESET_VALIDITY });
      }, 2000);
    }

    return () => {
      clearTimeout(timeId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSumbit(value);
      dispatchForm({ type: CLEAR_ACTION });
    }
  }, [isFormReadyToSubmit, value, onSumbit]);

  return (
    <form className={styles["login-form"]} onSubmit={userLogin}>
      <Title>Вход</Title>
      <Input
        placeholder="Ваше имя"
        className={styles["login-form__input"]}
        value={value}
        ref={loginRef}
        onChange={onChange}
        isValid={isValid}
      />
      <Button>Войти в профиль</Button>
    </form>
  );
}
