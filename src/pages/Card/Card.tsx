import { FC } from "react";
import { useParams } from "react-router-dom";

import { FavoriteButton } from "../../components/Button/Favorite";
import { GoBack } from "../../components/Button/GoBack";
import Spinner from "../../components/spinner/Spinner";
import { useGetHeroesByIdQuery } from "../../store";

import styles from "./Card.module.scss";

export const Card: FC = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetHeroesByIdQuery(id ?? "");

  if (!data) {
    return;
  }
  const hero = data[0];

  return (
    <div className={styles.container}>
      {isLoading && <Spinner />}
      <div className={styles.card}>
        <img
          className={styles.image}
          src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`}
        />
        <div className={styles.wrapper}>
          <div className={styles.wrapper_title}>
            <h1 className={styles.title}>{hero?.name}</h1>
            <FavoriteButton />
          </div>

          {hero?.description === "" ? (
            <p className={styles.description}>Description not found</p>
          ) : (
            <p className={styles.description}>{hero?.description}</p>
          )}

          <GoBack title="go back" />
        </div>
      </div>
    </div>
  );
};
