import { useState, useEffect } from "react";

import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import Nav from "../../components/Nav/Nav";
import HeaderCart from "../../components/HeaderCart/HeaderCart";
import HamburgerPanel from "../HamburgerPanel/HamburgerPanel";
import Hamburger from "../../components/Hamburger/Hamburger";

import useBodyClass from "../../hooks/useBodyClass";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  useBodyClass("body__no-scroll", menuOpen);

  useEffect(() => {
    const threshold = 250;

    const handleScroll = () => {
      setShowFixedHeader(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderHeaderContent = () => {
    return (
      <div className={styles["header__container"]}>
        <Link to="/" className={styles["header__logo"]}></Link>
        <Nav />
        <HeaderCart />
        <div className={styles["header__hamburger"]}>
          <Hamburger onClick={openMenu} />
        </div>
      </div>
    );
  };
  return (
    <>
      <header className={styles["header"]}>
        {renderHeaderContent()}
        <div
          className={`${styles["header__hamburger-panel"]} ${menuOpen ? styles["header__hamburger-panel--show"] : ""}`}
        >
          <HamburgerPanel onClose={closeMenu} />
        </div>
      </header>
      <div
        className={`${styles["fixed-header"]} fh ${showFixedHeader ? styles["fixed-header--visible"] : ""}`}
      >
        {renderHeaderContent()}
      </div>
    </>
  );
};

export default Header;
