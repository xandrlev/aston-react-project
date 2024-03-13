import { FC } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Link } from "react-router-dom";

import { useTheme } from "../../pages/providers/useTheme";
import { Search } from "../Search";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <h1 className={styles.logo_text}>MARVEL</h1>
          </Link>
        </div>
        <div className={styles.wrapper}>
          <Search />
          <div className={styles.wrapper_login}>
            <Link className={styles.link} to="/login">
              Log in
            </Link>
            <Link className={styles.link} to="/register">
              Sign up
            </Link>
          </div>
          <div className={styles.wrapper_icon}>
            {theme !== "dark" ? (
              <IoMoon onClick={toggleTheme} className={styles.icon} />
            ) : (
              <IoSunny onClick={toggleTheme} className={styles.icon} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
