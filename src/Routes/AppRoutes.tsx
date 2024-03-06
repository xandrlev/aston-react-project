import { Route, Routes } from "react-router-dom";

import { Card } from "../pages/Card";
import { Home } from "../pages/Home/";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:id" element={<Card />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
