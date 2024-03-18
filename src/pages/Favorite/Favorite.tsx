import Spinner from "../../components/spinner/Spinner";
import { useAuth } from "../../hooks";

export const Favorite = () => {
  const { email, isAuth } = useAuth();

  return (
    <div className="container">{!isAuth ? <Spinner /> : <p>{email}</p>}</div>
  );
};
