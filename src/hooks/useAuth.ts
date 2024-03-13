import { useAppSelector } from ".";

export const useAuth = () => {
  const { email, token, id } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    id,
    email,
    token,
  };
};
