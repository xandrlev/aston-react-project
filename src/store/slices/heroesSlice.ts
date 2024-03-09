import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

import { fetchTypes } from "../../types/fetchTypes";

export const fetchHeroes = createAsyncThunk<fetchTypes[], string | undefined>(
  "heroes/fetchHeroes",
  async (id = "", { rejectWithValue }) => {
    const BASE_URL: string = import.meta.env.VITE_BASE_URL;
    const API_KEY: string = import.meta.env.VITE_API_KEY;
    const API_HASH: string = import.meta.env.VITE_HASH;
    const character = id ? `/${id}` : "";
    const URL = `${BASE_URL}${character}?&limit=30&offset=82&ts=1&apikey=${API_KEY}&hash=${API_HASH}`;

    try {
      const { data } = await axios.get(URL);
      return data.data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

interface State {
  heroes: fetchTypes[];
  status: "loading" | "success" | "error";
}

const initialState: State = {
  heroes: [],
  status: "loading",
};

export const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHeroes.fulfilled, (state, { payload }) => {
        state.heroes = payload;
        state.status = "success";
      })
      .addCase(fetchHeroes.rejected, (state) => {
        state.status = "error";
        state.heroes = [];
      });
  },
});

export default heroesSlice.reducer;
