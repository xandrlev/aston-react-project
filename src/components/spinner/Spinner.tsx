import { FC } from "react";

import BarLoader from "react-spinners/BarLoader";

import styles from "./Spinner.module.scss";

const Spinner: FC = () => (
  <div className={styles.container}>
    <BarLoader color="#eb2328" height={7} width={150} />
  </div>
);

export default Spinner;
