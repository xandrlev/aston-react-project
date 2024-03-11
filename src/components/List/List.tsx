import { FC } from "react";

import { Link } from "react-router-dom";

import { fetchHeroes } from "../../types/fetchTypes";
import Spinner from "../spinner/Spinner";

import styles from "./List.module.scss";

interface Props {
  isLoading: boolean;
  data: fetchHeroes[] | undefined;
}

export const List: FC<Props> = ({ data, isLoading }) => (
  <>
    {isLoading && <Spinner />}
    <ul className={styles.list}>
      {data?.map((item) => (
        <li key={item.id}>
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