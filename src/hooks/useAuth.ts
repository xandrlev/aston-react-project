import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useActions, useAppSelector } from ".";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const { email } = useAppSelector((state) => state.user);
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
        });
        setIsAuth(true);
        setIsLoading(false);
      }
    });

    return () => {
      onAuth();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    logOut,
  };
};
