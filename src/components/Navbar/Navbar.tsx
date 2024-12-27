"use client";

import styles from "./Navbar.module.scss";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MegaDrawsLogo from "../../assets/mega_draws.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { UserButton } from "@clerk/nextjs";
import usersGlobalStore, { UsersGlobalStoreType } from "@/store/usersStore";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { loggedInUserData }: UsersGlobalStoreType =
    usersGlobalStore() as UsersGlobalStoreType;

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
  console.log(loggedInUserData);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoDiv}>
          <Image src={MegaDrawsLogo} alt="Mega Draws Logo" />
        </div>
        <div className={`${styles.links} ${menuOpen ? styles.showMenu : ""}`}>
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/buy-tickets">Buy Tickets</a>
          <a href="/results">Results</a>
          <a href="/winners">Winners</a>
          <a href="/faqs">FAQs</a>
        </div>
        {!loggedInUserData ? (
          <a href="/sign-in" className={styles.loginLink}>
            Login
          </a>
        ) : (
          <div className="flex flex-row items-center">
            {loggedInUserData?.isAdmin ? (
              <a href="/portals/admin/lotteries" className={styles.loginLink}>
                Admin Dashboard
              </a>
            ) : (
              <a href="/portals/user/lotteries" className={styles.loginLink}>
                User Dashboard
              </a>
            )}
            <UserButton />
          </div>
        )}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
