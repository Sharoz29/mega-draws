import React from "react";
import styles from "./Security.module.scss";
import Image from "next/image";
import Lottery4 from "@/assets/Lottery-4.jpg";

const Security = () => {
  const features = [
    "Professional support team",
    "Secure and reliable payment system",
    "24/7 live chat support",
    "Achieve your jackpot goals",
    "Global access to lottery draws",
    "Transparent and fair policies",
  ];

  return (
    <section className={styles.secureSystemSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image
              src={Lottery4}
              alt="Our Secure System"
              width={700}
              height={600}
            />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <h2 className={styles.heading}>We Provide a High-Security System</h2>
          <p className={styles.description}>
            Experience the most secure and transparent lottery platform. With
            state-of-the-art encryption and reliable systems, we ensure your
            data and transactions are always protected.
          </p>
          <ul className={styles.featuresList}>
            {features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Security;
