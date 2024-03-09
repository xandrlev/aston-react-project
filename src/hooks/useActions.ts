import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { fetchHeroes } from "../store/slices/heroesSlice";

const actions = { fetchHeroes };

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
