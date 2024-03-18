import { FC } from "react";
import { useLocation } from "react-router-dom";

import { List } from "../../components/List";
import Spinner from "../../components/spinner/Spinner";
import { useGetHeroesSearchQuery } from "../../store";

export const SearchPage: FC = () => {
  const { search: searchParams } = useLocation();
  const query = new URLSearchParams(searchParams).get("query") || "";

  const { data, isLoading } = useGetHeroesSearchQuery(query);

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : data?.length ? (
        <List data={data} isLoading={isLoading} />
      ) : (
        <h2>Nothing found</h2>
      )}
    </div>
  );
};
