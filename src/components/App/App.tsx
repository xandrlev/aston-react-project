import { AppRoutes } from "../../Routes/AppRoutes";
import { Header } from "../Header";

import "../../styles/app.scss";

export function App() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}
