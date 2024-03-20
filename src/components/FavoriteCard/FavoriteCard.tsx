import { FC } from "react";

import { Link } from "react-router-dom";

import { useGetHeroesByIdQuery } from "../../store";
import { FavoriteButton } from "../Button/Favorite";

import styles from "./FavoriteCard.module.scss";

interface Props {
  idCard: number;
}

export const FavoriteCard: FC<Props> = ({ idCard }) => {
  const { data } = useGetHeroesByIdQuery(String(idCard));

  if (!data) {
    return;
  }

  const hero = data[0];

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <FavoriteButton characterId={hero.id} />
      </div>
      <Link className={styles.card} to={`/hero/${hero.id}`}>
        <img
          className={styles.image}
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={hero.name}
        />
        <div className={styles.layout}>
          <h2 className={styles.title}>{hero.name}</h2>
        </div>
      </Link>
    </div>
  );
};
