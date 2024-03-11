import { Route, Routes } from "react-router-dom";

import { Card } from "../pages/Card";
import { Home } from "../pages/Home/";
import { NotFound } from "../pages/NotFound";
import { SearchPage } from "../pages/Search/SearchPage";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hero/:id" element={<Card />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
