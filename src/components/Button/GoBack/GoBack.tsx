import PropTypes from "prop-types";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./GoBack.module.scss";

type Prop = {
  title: string;
};

export const GoBack: FC<Prop> = ({ title }) => {
  const navigate = useNavigate();

  const onClick = () => {
    if (title === "go back") {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <button className={styles.button} onClick={onClick}>
      {title.toUpperCase()}
    </button>
  );
};

GoBack.propTypes = {
  title: PropTypes.string.isRequired,
};

GoBack.defaultProps = {
  title: "/",
};
