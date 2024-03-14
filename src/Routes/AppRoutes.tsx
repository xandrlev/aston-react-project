import { Route, Routes } from "react-router-dom";

import { LoginPage, RegisterPage } from "../pages/AuthPage";
import { Card } from "../pages/Card";
import { Home } from "../pages/Home/";

import { NotFound } from "../pages/NotFound";
import { SearchPage } from "../pages/Search/SearchPage";

import { UserPage } from "../pages/User/UserPage";

import { PrivateRoutes } from "./PrivateRoutes";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hero/:id" element={<Card />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<RegisterPage />} />
    <Route path="*" element={<NotFound />} />

    <Route
      path="/favorites"
      element={
        <PrivateRoutes>
          <UserPage />
        </PrivateRoutes>
      }
    />
    <Route
      path="/history"
      element={
        <PrivateRoutes>
          <UserPage />
        </PrivateRoutes>
      }
    />
  </Routes>
);
