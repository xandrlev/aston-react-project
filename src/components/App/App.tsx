import { useLocation } from "react-router-dom";

import { AppRoutes } from "../../Routes/AppRoutes";
import { Header } from "../Header";

import "../../styles/app.scss";

export function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/not-found" && <Header />}
      <AppRoutes />
    </>
  );
}
