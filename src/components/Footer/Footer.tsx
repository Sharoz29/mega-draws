import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faLinkedinIn,
  faInstagram,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import MegaDrawsLogo from "../../assets/mega_draws.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.company}>
          <h3>MEGA Draws</h3>
          <p className={styles.excitingFontContainer}>
            <b className={styles.excitingFont}>
              Join the Ultimate Lottery Experience!
            </b>
            <br />
            Enter our lottery draws for a chance to take home incredible prizes,
            and experience the thrill of life-changing wins!
          </p>
          <div className={styles.listContainer}>
            <ul>
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about-us" className={styles.link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className={styles.link}>
                  FAQs
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/buy-tickets" className={styles.link}>
                  Buy Tickets
                </Link>
              </li>
              <li>
                <Link href="/results" className={styles.link}>
                  Results
                </Link>
              </li>
              <li>
                <Link href="/winners" className={styles.link}>
                  Winners
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.playButtonContainer}>
          <Link href="/" className={styles.playButton}>
            Play Now
          </Link>
        </div>

        <div className={styles.footerDivRight}>
          <div className={styles.footerLogDiv}>
            <Image src={MegaDrawsLogo} alt="Mega Draws Logo" />
          </div>

          <div className={styles.social}>
            <h3>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
