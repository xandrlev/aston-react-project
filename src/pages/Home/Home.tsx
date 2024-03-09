import { FC } from "react";

import { Link } from "react-router-dom";

import Spinner from "../../components/spinner/Spinner";
import { useGetHeroesQuery } from "../../store";

import styles from "./Home.module.scss";

export const Home: FC = () => {
  const { data, isLoading } = useGetHeroesQuery("");

  return (
    <div className="container">
      {isLoading && <Spinner />}
      <ul className={styles.list}>
        {data?.data.results.map((item) => (
          <li key={item.id}>
            <Link className={styles.card} to={`${item.id}`}>
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
    </div>
  );
};
