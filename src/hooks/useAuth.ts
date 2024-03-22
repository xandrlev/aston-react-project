import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { selectUserEmail } from "../store/selectors";

import { useActions, useAppSelector } from ".";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const email = useAppSelector(selectUserEmail);
  const { setUser, removeUser } = useActions();
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onAuth = onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser({
          id: user.uid,
          email: user.email,
          isAuth: true,
        });
        setIsLoading(false);
        setIsAuth(true);
      }
    });

    return () => {
      onAuth();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
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

  const registerUser = (email: string, password: string) => {
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

  const logOut = () => {
    signOut(auth);
    removeUser();
    setIsAuth(false);

    navigate("/", { replace: true });
  };

  return {
    email,
    isAuth,
    isLoading,
    signIn,
    registerUser,
    logOut,
  };
};
