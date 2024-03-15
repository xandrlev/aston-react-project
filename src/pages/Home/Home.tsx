import { FC } from "react";

import { List } from "../../components/List";
import { useGetHeroesQuery } from "../../store";

export const Home: FC = () => {
  const { data, isLoading } = useGetHeroesQuery("");

  return (
    <div className="container">
      <List data={data} isLoading={isLoading} />
    </div>
  );
};
