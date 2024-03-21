import { FC } from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks";

import { Form } from "./Form";
import styles from "./Form.module.scss";

export const Register: FC = () => {
  const { registerUser } = useAuth();

  const handleRegister = (email: string, password: string) => {
    registerUser(email, password);
  };

  return (
    <div className="container">
      <Form title="Sign up" handleClick={handleRegister} />
      <div className={styles.auth}>
        Already registered?{" "}
        <Link className={styles.link} to="/login">
          Sign in
        </Link>
      </div>
    </div>
  );
};
