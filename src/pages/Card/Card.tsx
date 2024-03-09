import { FC, useEffect } from "react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";

import styles from "./Card.module.scss";

export const Card: FC = () => {
  const { heroes } = useAppSelector((state) => state.heroes);
  const { fetchHeroes } = useActions();
  const { id } = useParams();
  const navigate = useNavigate();

  const item = heroes[0];

  useEffect(() => {
    fetchHeroes(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className={"container"}>
      <div className={styles.card}>
        <img
          className={styles.image}
          src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`}
        />
        <div className={styles.wrapper}>
          <div className={styles.wrapper_title}>
            <h1 className={styles.title}>{item?.name}</h1>
            <IoBookmark className={styles.favorite} />
            <IoBookmarkOutline className={styles.favorite} />
          </div>

          {item?.description === "" ? (
            <p className={styles.description}>Description not found</p>
          ) : (
            <p className={styles.description}>{item?.description}</p>
          )}

          <button className={styles.button} onClick={() => navigate(-1)}>
            GO BACK
          </button>
        </div>
      </div>
    </div>
  );
};
