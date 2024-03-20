import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FC } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useActions } from "../../hooks";

import { Form } from "./Form";
import styles from "./Form.module.scss";

export const Register: FC = () => {
  const navigate = useNavigate();

  const { setUser } = useActions();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({
          id: user.uid,
          email: user.email,
          isAuth: true,
        });
        navigate("/");
      })
      .catch((error) => alert(error));
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
