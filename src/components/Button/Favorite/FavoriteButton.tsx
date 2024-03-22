import { FC } from "react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

import { useAppSelector } from "../../../hooks";
import { useFavorite } from "../../../hooks/useFavorite";

import { selectUserAuthStatus } from "../../../store/selectors";

import styles from "./Favorite.module.scss";

interface Props {
  characterId: number;
}

export const FavoriteButton: FC<Props> = ({ characterId }) => {
  const { toggleFavorite, isFavorite } = useFavorite(characterId);
  const isAuth = useAppSelector(selectUserAuthStatus);

  return (
    <>
      {isAuth && (
        <div className={styles.layout}>
          {isFavorite ? (
            <IoBookmark onClick={toggleFavorite} className={styles.favorite} />
          ) : (
            <IoBookmarkOutline
              onClick={toggleFavorite}
              className={styles.favorite}
            />
          )}
        </div>
      )}
    </>
  );
};
