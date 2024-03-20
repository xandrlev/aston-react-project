import { FavoriteCard } from "../../components/FavoriteCard/FavoriteCard";
import Spinner from "../../components/spinner/Spinner";
import { useAuth } from "../../hooks";
import { useFavorite } from "../../hooks/useFavorite";

import styles from "./Favorites.module.scss";

export const Favorite = () => {
  const { isAuth } = useAuth();
  const { characters, isLoading } = useFavorite();

  if (!characters) {
    return;
  }

  return (
    <div className="container">
      <h2 className={styles.title}>FAVORITES HEROES</h2>

      {isLoading && isAuth ? (
        <Spinner />
      ) : characters.length ? (
        <div className={styles.list}>
          {characters.map((item) => (
            <FavoriteCard key={item.id} idCard={item.id} />
          ))}
        </div>
      ) : (
        <h2 className={styles.not_found}>Nothing found</h2>
      )}
    </div>
  );
};
