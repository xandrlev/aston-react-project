import { FC } from "react";

import { Link } from "react-router-dom";

import { Heroes } from "../../types/heroes";
import { FavoriteButton } from "../Button/Favorite";
import Spinner from "../spinner/Spinner";

import styles from "./List.module.scss";

interface Props {
  isLoading: boolean;
  data?: Heroes[];
}

export const List: FC<Props> = ({ data, isLoading }) => {
  if (!data) {
    return;
  }

  return (
    <>
      {isLoading && <Spinner />}
      <ul className={styles.list}>
        {data.map((item) => (
          <li className={styles.card} key={item.id}>
            <div className={styles.favorite}>
              <FavoriteButton characterId={item.id} />
            </div>
            <Link className={styles.card} to={`/hero/${item.id}`}>
              <img
                className={styles.image}
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt={item.name}
              />
              <div className={styles.layout}>
                <h2 className={styles.title}>{item.name}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
