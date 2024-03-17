import { FC } from "react";

import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";

import Spinner from "../../components/spinner/Spinner";
import { useHistory } from "../../hooks/useHistory";

import styles from "./History.module.scss";

export interface HistoryQuery {
  id: string;
  name: string | null;
  url: string;
  date: string;
}

export const History: FC = () => {
  const { deleteHistory, queryHistory, isLoading } = useHistory();

  const onClick = (id: string) => {
    deleteHistory(id);
  };

  return (
    <div className="container">
      <h2>SEARCH HISTORY</h2>
      {isLoading ? (
        <Spinner />
      ) : queryHistory.length ? (
        <ul className={styles.table}>
          {queryHistory.map((item) => (
            <li className={styles.row} key={item.id}>
              <Link to={`/search?query=${item.url}`}>{item.url}</Link>
              <TiDelete
                onClick={() => onClick(item.id)}
                className={styles.icon}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h2>Nothing found</h2>
      )}
    </div>
  );
};
