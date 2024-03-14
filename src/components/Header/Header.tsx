import { FC } from "react";
import { IoMoon, IoSunny, IoLogOutSharp, IoBookmark } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../pages/providers/useTheme";
import { Search } from "../Search";

import styles from "./Header.module.scss";

export const Header: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuth, logOut } = useAuth();

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

          <ul className={styles.wrapper_login}>
            {isAuth ? (
              <>
                <li>
                  <IoLogOutSharp className={styles.icon} onClick={logOut} />
                </li>
                <li>
                  <Link className={styles.icon} to={"/favorites"}>
                    <IoBookmark />
                  </Link>
                </li>
                <li>
                  <Link className={styles.icon} to={"/history"}>
                    <MdWorkHistory />
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link className={styles.link} to="/login">
                  Log in
                </Link>
              </li>
            )}
          </ul>

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
