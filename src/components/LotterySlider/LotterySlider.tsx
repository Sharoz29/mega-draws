"use client";
import { useState } from "react";
import styles from "./LotterySlider.module.scss";
import Lottery1 from "@/assets/Lottery-1.png";
import Lottery2 from "@/assets/Lottery-2.png";
import Lottery3 from "@/assets/Lottery-3.png";
import Image from "next/image";

const dummyData = [
  {
    id: 1,
    code: "20CD",
    winPrice: "$2000K",
    image: Lottery1,
    name: "Winter Jackpot",
    nextDraw: "20 May 2020",
  },
  {
    id: 2,
    code: "20CD",
    winPrice: "$5000K",
    image: Lottery2,
    name: "Las Vegas Lottery",
    nextDraw: "10 May 2020",
  },
  {
    id: 3,
    code: "20CD",
    winPrice: "$8000K",
    image: Lottery3,
    name: "Powerball",
    nextDraw: "15 May 2020",
  },
  {
    id: 4,
    code: "50CD",
    winPrice: "$15000K",
    image: Lottery1,
    name: "Mega Millions",
    nextDraw: "25 May 2020",
  },
  {
    id: 5,
    code: "60CD",
    winPrice: "$10000K",
    image: Lottery2,
    name: "Super Lotto",
    nextDraw: "30 May 2020",
  },
];

const LotterySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dummyData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
  };

  const visibleItems = [
    dummyData[currentIndex],
    dummyData[(currentIndex + 1) % dummyData.length],
    dummyData[(currentIndex + 2) % dummyData.length],
  ];

  return (
    <section className={styles.lotterySliderSection}>
      <h2 className={styles.heading}>Jackpot Lottery</h2>
      <p className={styles.subHeading}>
        Play your favorite lotteries and stand a chance to win big!
      </p>
      <div className={styles.slider}>
        <button className={styles.arrow} onClick={handlePrev}>
          &#8249;
        </button>
        <div className={styles.cardsContainer}>
          {visibleItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.code}>{item.code}</span>
                <span className={styles.winPrice}>{item.winPrice}</span>
              </div>
              <div className={styles.image}>
                <Image src={item.image} alt={item.name} />
              </div>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.nextDraw}>Next Draw: {item.nextDraw}</p>
              <button className={styles.playNow}>Play Now</button>
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default LotterySlider;
