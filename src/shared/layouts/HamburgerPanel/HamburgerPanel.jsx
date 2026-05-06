import contacts from "../../constants/contacts";
import MobilNav from "../../components/MobilNav/MobilNav";

import styles from "./HamburgerPanel.module.css";

const HamburgerPanel = ({ onClose }) => {
  return (
    <div className={styles["hamburger-panel"]}>
      <div className={styles["hamburger-panel__lines"]}>
        <div className={styles["hamburger-panel__line"]}>
          <MobilNav onClose={onClose} />
        </div>
        <div className={styles["hamburger-panel__line"]}>
          <div className={styles["hamburger-panel__contact"]}>
            <a
              href={`tel:${contacts.phone}`}
              className={styles["hamburger-panel__link"]}
            >
              {contacts.phone}
            </a>
          </div>
          <div className={styles["hamburger-panel__contact"]}>
            {contacts.address}
          </div>
          <div className={styles["hamburger-panel__contact"]}>
            <ul className={styles["hamburger-panel__social-list"]}>
              {contacts.socialItems.map(({ id, href, icon }) => (
                <li key={id} className={styles["hamburger-panel__social-li"]}>
                  <a
                    href={href}
                    className={styles["hamburger-panel__social-button"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles["hamburger-panel__close"]} onClick={onClose} />
    </div>
  );
};

export default HamburgerPanel;
