import { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { fetchTypes } from "../../types/fetchTypes";

import styles from "./Home.module.scss";

export const Home: FC = () => {
  const BASE_URL: string = import.meta.env.VITE_BASE_URL;
  const API_KEY: string = import.meta.env.VITE_API_KEY;
  const API_HASH: string = import.meta.env.VITE_HASH;
  const URL = `${BASE_URL}?&limit=50&offset=82&ts=1&apikey=${API_KEY}&hash=${API_HASH}`;

  const [items, setItems] = useState<fetchTypes[]>([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setItems(data.data.results))
      // eslint-disable-next-line no-console
      .catch((e) => console.error(e));
  }, [URL]);

  return (
    <div className="container">
      <ul className={styles.list}>
        {items.map((item) => (
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
