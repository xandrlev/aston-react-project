import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// import { userActions } from "../store/slices/userSlice";

const actions = {};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
