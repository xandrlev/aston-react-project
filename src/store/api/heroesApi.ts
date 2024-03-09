import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { fetchData } from "../../types/fetchTypes";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;
const API_KEY: string = import.meta.env.VITE_API_KEY;
const API_HASH: string = import.meta.env.VITE_HASH;

export const heroesApi = createApi({
  reducerPath: "heroesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getHeroes: builder.query<fetchData, string>({
      query: () =>
        `?&limit=20&offset=82&ts=1&apikey=${API_KEY}&hash=${API_HASH}`,
    }),
    getHeroesById: builder.query<fetchData, string>({
      query: (characterId) =>
        `/${characterId}?&limit=30&offset=82&ts=1&apikey=${API_KEY}&hash=${API_HASH}`,
    }),
  }),
});

export const { useGetHeroesQuery, useGetHeroesByIdQuery } = heroesApi;
