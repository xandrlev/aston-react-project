import { Route, Routes } from "react-router-dom";

import { Card } from "../pages/Card";
import { Home } from "../pages/Home/";

import { LoginPage, RegisterPage } from "../pages/LoginPage";
import { NotFound } from "../pages/NotFound";
import { SearchPage } from "../pages/Search/SearchPage";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hero/:id" element={<Card />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
