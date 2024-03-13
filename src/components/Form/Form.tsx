import { FC, useState } from "react";

import styles from "./Form.module.scss";

interface Props {
  title: string;
  handleClick: () => void;
}

export const Form: FC<Props> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title.toUpperCase()}</h2>
      <form className={styles.form} onClick={() => handleClick()}>
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
      </form>
    </div>
  );
};
