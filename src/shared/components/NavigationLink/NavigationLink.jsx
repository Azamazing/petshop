import styles from "./NavigationLink.module.css";

import { Link } from "react-router-dom";

const NavigationLink = ({ to, label }) => {
  return (
    <Link to={to} className={styles["navigation-link"]}>
      {label}
    </Link>
  );
};

export default NavigationLink;
