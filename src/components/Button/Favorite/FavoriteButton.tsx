import { FC, useState } from "react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

import { auth } from "../../../firebase";

import styles from "./Favorite.module.scss";

export const FavoriteButton: FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {auth.currentUser && (
        <>
          {isFavorite ? (
            <IoBookmark onClick={onToggle} className={styles.favorite} />
          ) : (
            <IoBookmarkOutline onClick={onToggle} className={styles.favorite} />
          )}
        </>
      )}
    </>
  );
};
