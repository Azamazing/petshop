import menuItems from "../../constants/menuItems";
import { NavLink } from "react-router-dom";
import styles from "./MobilNav.module.css";

const MobilNav = ({ onClose }) => {
  return (
    <ul
      className={styles["mobile-nav__list"]}
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      {menuItems.map(({ id, href, text }) => (
        <li key={id} className={styles["mobile-nav__item"]}>
          <NavLink
            to={href}
            className={({ isActive }) =>
              `${styles["mobile-nav__item-link"]} ${isActive ? "active" : ""}`
            }
            itemProp="url"
            onClick={onClose}
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MobilNav;
