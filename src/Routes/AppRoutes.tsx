import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Spinner from "../components/spinner/Spinner";

import { PrivateRoutes } from "./PrivateRoutes";

const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ "../pages/Home/").then((module) => ({
    default: module.Home,
  })),
);
const Card = lazy(() =>
  import(/* webpackChunkName: "Card" */ "../pages/Card").then((module) => ({
    default: module.Card,
  })),
);
const SearchPage = lazy(() =>
  import(
    /* webpackChunkName: "SearchPage" */ "../pages/Search/SearchPage"
  ).then((module) => ({
    default: module.SearchPage,
  })),
);
const LoginPage = lazy(() =>
  import(/* webpackChunkName: "LoginPage" */ "../pages/AuthPage").then(
    (module) => ({ default: module.LoginPage }),
  ),
);
const RegisterPage = lazy(() =>
  import("../pages/AuthPage").then((module) => ({
    default: module.RegisterPage,
  })),
);
const History = lazy(() =>
  import(/* webpackChunkName: "History" */ "../pages/History").then(
    (module) => ({
      default: module.History,
    }),
  ),
);
const Favorite = lazy(() =>
  import(/* webpackChunkName: "Favorite" */ "../pages/Favorite").then(
    (module) => ({
      default: module.Favorite,
    }),
  ),
);
const NotFound = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ "../pages/NotFound").then(
    (module) => ({
      default: module.NotFound,
    }),
  ),
);

export const AppRoutes = () => (
  <ErrorBoundary>
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:id" element={<Card />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />

        <Route
          path="/favorites"
          element={
            <PrivateRoutes>
              <Favorite />
            </PrivateRoutes>
          }
        />

        <Route
          path="/history"
          element={
            <PrivateRoutes>
              <History />
            </PrivateRoutes>
          }
        />

        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Suspense>
  </ErrorBoundary>
);
