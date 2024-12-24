import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TopBar.module.scss";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import Gucci from "../../svgs/Gucci";
import Lacoste from "../../svgs/Lacoste";
import Hermes from "../../svgs/Hermes";
import Cartier from "../../svgs/Cartier";
import Swarovski from "../../svgs/Swarovski";
import TagHeuer from "../../svgs/TagHeuer";
import LouisVuitton from "../../svgs/LouisVuitton";
import Dolce from "../../svgs/Dolce";
import Versace from "../../svgs/Versace";
import Prada from "../../svgs/Prada";

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          <span>
            <FontAwesomeIcon icon={faApple} color="black" />
          </span>
          <span>
            <Gucci />
          </span>
          <span>
            <Lacoste />
          </span>
          <span>
            <Hermes />
          </span>
          <span>
            <Cartier />
          </span>
          <span>
            <Swarovski />
          </span>
          <span>
            <TagHeuer />
          </span>
          <span>
            <LouisVuitton />
          </span>
          <span>
            <Dolce />
          </span>
          <span>
            <Versace />
          </span>
          <span>
            <Prada />
          </span>
          <span>
            <FontAwesomeIcon icon={faApple} color="black" />
          </span>
          <span>
            <Gucci />
          </span>
          <span>
            <Lacoste />
          </span>
          <span>
            <Hermes />
          </span>
          <span>
            <Cartier />
          </span>
          <span>
            <Swarovski />
          </span>
          <span>
            <TagHeuer />
          </span>
          <span>
            <LouisVuitton />
          </span>
          <span>
            <Dolce />
          </span>
          <span>
            <Versace />
          </span>
          <span>
            <Prada />
          </span>
        </div>
      </div>
    </div>
  );
}
