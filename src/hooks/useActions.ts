import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const actions = {};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
