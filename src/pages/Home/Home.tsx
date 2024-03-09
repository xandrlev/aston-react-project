import { FC, useEffect } from "react";

import { Link } from "react-router-dom";

import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";

import styles from "./Home.module.scss";

export const Home: FC = () => {
  const { heroes, status } = useAppSelector((state) => state.heroes);

  const { fetchHeroes } = useActions();

  useEffect(() => {
    fetchHeroes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      {status === "loading" && <h2>Loading...</h2>}

      <ul className={styles.list}>
        {heroes.map((item) => (
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
