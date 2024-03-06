import { FC, useEffect, useState } from "react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

import { fetchTypes } from "../../types/fetchTypes";

import styles from "./Card.module.scss";

export const Card: FC = () => {
  const [item, setItem] = useState<fetchTypes>();
  const { id } = useParams();
  const navigate = useNavigate();
  const BASE_URL: string = import.meta.env.VITE_BASE_URL;
  const API_KEY: string = import.meta.env.VITE_API_KEY;
  const API_HASH: string = import.meta.env.VITE_HASH;
  const URL = `${BASE_URL}/${id}?&ts=1&apikey=${API_KEY}&hash=${API_HASH}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setItem(data.data.results[0]))
      // eslint-disable-next-line no-console
      .catch((e) => console.error(e));
  }, [URL]);

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
