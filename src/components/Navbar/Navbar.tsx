"use client";

import styles from "./Navbar.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MegaDrawsLogo from "../../assets/mega_draws.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const navLinks = document.querySelectorAll(`.${styles.links} a`);

    navLinks.forEach((link) => {
      link.classList.remove(styles.activeLink);
    });
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === pathname) {
        link.classList.add(styles.activeLink);
      }
    });
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoDiv}>
          <Image src={MegaDrawsLogo} alt="Mega Draws Logo" />
        </div>
        <div className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
          <a href="/">Home</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/about-us">About Us</a>
          <a href="/buy-tickets">Buy Tickets</a>
          <a href="/results">Results</a>
          <a href="/winners">Winners</a>
        </div>
        <a href="/sign-in" className={styles.loginLink}>
          Login
        </a>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
