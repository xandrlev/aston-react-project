import { FC } from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks";

import { Form } from "./Form";
import styles from "./Form.module.scss";

export const LogIn: FC = () => {
  const { signIn } = useAuth();

  const handleLogin = (email: string, password: string) => {
    signIn(email, password);
  };

  return (
    <div className="container">
      <Form title="Log in" handleClick={handleLogin} />
      <div className={styles.auth}>
        You don't have an account?{" "}
        <Link className={styles.link} to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
};
