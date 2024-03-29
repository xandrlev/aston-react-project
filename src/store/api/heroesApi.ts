import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { FetchData } from "../../types/fetchTypes";
import { Heroes } from "../../types/heroes";

const BASE_URL: string = import.meta.env.VITE_BASE_URL;
const API_KEY: string = import.meta.env.VITE_API_KEY;
const API_HASH: string = import.meta.env.VITE_HASH;

const transformResponse = (response: FetchData): Heroes[] =>
  response.data.results;

export const heroesApi = createApi({
  reducerPath: "heroesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getHeroes: builder.query<Heroes[], void>({
      query: () =>
        `?&limit=20&offset=82&ts=1&apikey=${API_KEY}&hash=${API_HASH}`,
      transformResponse,
    }),
    getHeroesById: builder.query<Heroes[], string>({
      query: (characterId) =>
        `/${characterId}?&limit=30&offset=82&ts=1&apikey=${API_KEY}&hash=${API_HASH}`,
      transformResponse,
    }),
    getHeroesSearch: builder.query<Heroes[], string>({
      query: (name) =>
        `?nameStartsWith=${name ? name : " "}&limit=20&ts=1&apikey=${API_KEY}&hash=${API_HASH}`,
      transformResponse,
    }),
  }),
});

export const {
  useGetHeroesQuery,
  useGetHeroesByIdQuery,
  useGetHeroesSearchQuery,
} = heroesApi;
