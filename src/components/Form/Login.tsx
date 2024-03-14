import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FC } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useActions } from "../../hooks";

import { Form } from "./Form";
import styles from "./Form.module.scss";

export const LogIn: FC = () => {
  const navigate = useNavigate();
  const { setUser } = useActions();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({
          id: user.uid,
          email: user.email,
        });
        navigate("/");
      })
      .catch((error) => alert(error));
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
