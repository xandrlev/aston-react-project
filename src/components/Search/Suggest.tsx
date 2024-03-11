import { FC } from "react";
import { Link } from "react-router-dom";

import { fetchHeroes } from "../../types/fetchTypes";

import styles from "./Search.module.scss";

interface Props {
  isLoading: boolean;
  data: fetchHeroes[] | undefined;
  isSuggest: boolean;
  setIsSuggest: (status: boolean) => void;
}

export const Suggest: FC<Props> = ({
  isLoading,
  data,
  isSuggest,
  setIsSuggest,
}) => (
  <ul className={styles.suggest}>
    {isLoading
      ? "Loading..."
      : !data?.length
        ? "No results"
        : data?.map((item) => (
            <li key={item.id}>
              <Link
                className={styles.card}
                onClick={() => {
                  setIsSuggest(!isSuggest);
                }}
                to={`/hero/${item.id}`}
              >
                <img
                  className={styles.image}
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.name}
                />
                <div className="title">{item.name}</div>
              </Link>
            </li>
          ))}
  </ul>
);
