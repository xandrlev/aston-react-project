import { FC } from "react";
import { useLocation } from "react-router-dom";

import { List } from "../../components/List";
import Spinner from "../../components/spinner/Spinner";
import { useGetHeroesSearchQuery } from "../../store";

import styles from "../Favorite/Favorites.module.scss";

export const SearchPage: FC = () => {
  const { search: searchParams } = useLocation();
  const query = new URLSearchParams(searchParams).get("query") || "";

  const { data, isLoading } = useGetHeroesSearchQuery(query);

  return (
    <div className="container">
      <h2 className={styles.title}>SEARCH PAGE</h2>
      {isLoading ? (
        <Spinner />
      ) : data?.length ? (
        <List data={data} isLoading={isLoading} />
      ) : (
        <h2 className={styles.not_found}>Nothing found</h2>
      )}
    </div>
  );
};
