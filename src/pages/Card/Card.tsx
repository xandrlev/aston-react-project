import { FC } from "react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

import Spinner from "../../components/Spinner/Spinner";
import { useGetHeroesByIdQuery } from "../../store";

import styles from "./Card.module.scss";

export const Card: FC = () => {
  const isFavorite = false;
  const { id = "" } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useGetHeroesByIdQuery(id);
  const hero = data?.data.results[0];

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.card}>
          <img
            className={styles.image}
            src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`}
          />
          <div className={styles.wrapper}>
            <div className={styles.wrapper_title}>
              <h1 className={styles.title}>{hero?.name}</h1>
              {!isFavorite ? (
                <IoBookmark className={styles.favorite} />
              ) : (
                <IoBookmarkOutline className={styles.favorite} />
              )}
            </div>

            {hero?.description === "" ? (
              <p className={styles.description}>Description not found</p>
            ) : (
              <p className={styles.description}>{hero?.description}</p>
            )}

            <button className={styles.button} onClick={() => navigate(-1)}>
              GO BACK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
