import { FC } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Link } from "react-router-dom";

import { Search } from "../Search";

import styles from "./Header.module.scss";

export const Header: FC = () => (
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
          <Link className={styles.link} to="/card">
            Log in
          </Link>
          <Link className={styles.link} to="/card">
            Sign up
          </Link>
        </div>
        <div className={styles.wrapper_icon}>
          <IoMoon className={styles.icon} />
          <IoSunny className={styles.icon} />
        </div>
      </div>
    </div>
  </header>
);
