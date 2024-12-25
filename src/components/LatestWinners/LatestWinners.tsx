import React from "react";
import styles from "./LatestWinners.module.scss";
import Lottery5 from "@/assets/Lottery-5.png";
import Lottery6 from "@/assets/Lottery-6.png";
import Lottery7 from "@/assets/Lottery-7.png";
import Image from "next/image";

const dummyData = [
  {
    id: 1,
    title: "Latest Daily Draw",
    date: "10 MAY",
    numbers: [12, 23, 24, 26, 31],
    winAmount: "$20,000",
    icon: Lottery5,
  },
  {
    id: 2,
    title: "Latest Weekly Draw",
    date: "12 MAY",
    numbers: [12, 23, 24, 26, 31],
    winAmount: "$20,000",
    icon: Lottery6,
  },
  {
    id: 3,
    title: "Latest Monthly Draw",
    date: "14 MAY",
    numbers: [12, 23, 24, 26, 31],
    winAmount: "$20,000",
    icon: Lottery7,
  },
  {
    id: 4,
    title: "Latest Jackpot Draw",
    date: "18 MAY",
    numbers: [12, 23, 24, 26, 31],
    winAmount: "$20,000",
    icon: Lottery5,
  },
];

const LatestWinners = () => {
  return (
    <section className={styles.latestWinnerSection}>
      <h2 className={styles.heading}>Latest Winner</h2>
      <p className={styles.subHeading}>
        Check out the most recent winning draws and lucky numbers.
      </p>
      <div className={styles.winnersContainer}>
        {dummyData.map((item) => (
          <div key={item.id} className={styles.winnerCard}>
            <div className={styles.ribbon}>{item.date}</div>
            <div className={styles.icon}>
              <Image src={item.icon} alt={item.title} />
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <div className={styles.numbers}>
              {item.numbers.map((number, index) => (
                <span key={index} className={styles.number}>
                  {number}
                </span>
              ))}
            </div>
            <p className={styles.winAmount}>Win: {item.winAmount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestWinners;
