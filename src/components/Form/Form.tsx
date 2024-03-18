import PropTypes from "prop-types";
import { ChangeEvent, FC, useState } from "react";

import styles from "./Form.module.scss";

interface Props {
  title: string;
  handleClick: (email: string, password: string) => void;
}

export const Form: FC<Props> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleClick(email, password);
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <h2 className={styles.title}>{title.toUpperCase()}</h2>
      <div className={styles.form}>
        <input
          className={styles.input}
          type="email"
          placeholder="email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button className={styles.submit}>{title}</button>
      </div>
    </form>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Form.defaultProps = {
  title: "LogIn or SignUp Form",
};
