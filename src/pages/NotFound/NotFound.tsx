import { GoBack } from "../../components/Button/GoBack";

import styles from "./NotFound.module.scss";

export const NotFound = () => (
  <div className="container">
    <img className={styles.image} src="/public/404.png" alt="404" />
    <h1>PAGE NOT FOUND</h1>
    <GoBack title="home" />
  </div>
);
