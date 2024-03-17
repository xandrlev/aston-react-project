import { useLocation } from "react-router-dom";

import { List } from "../../components/List";
import Spinner from "../../components/spinner/Spinner";
import { useGetHeroesSearchQuery } from "../../store";

export const SearchPage = () => {
  const { search: searchParams } = useLocation();
  const query = new URLSearchParams(searchParams).get("query") || "";

  const { data, isLoading } = useGetHeroesSearchQuery(query);

  return (
    <div className="container">
      {isLoading && <Spinner />}
      <List data={data} isLoading={isLoading} />
    </div>
  );
};
