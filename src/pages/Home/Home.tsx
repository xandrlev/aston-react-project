import { FC } from "react";

import { List } from "../../components/List";
import Spinner from "../../components/spinner/Spinner";
import { useGetHeroesQuery } from "../../store";

export const Home: FC = () => {
  const { data, isLoading } = useGetHeroesQuery();

  return (
    <div className="container">
      {isLoading && <Spinner />}
      <List data={data} isLoading={isLoading} />
    </div>
  );
};
