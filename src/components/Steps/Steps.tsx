import styles from "./Steps.module.scss";
import Lottery1 from "@/assets/Lottery-1.png";
import Lottery2 from "@/assets/Lottery-2.png";
import Lottery3 from "@/assets/Lottery-3.png";
import Image from "next/image";

const HowToStart = () => {
  const steps = [
    {
      id: 1,
      icon: Lottery1,
      title: "Get access",
      description:
        "Sign up and create your account to access our lottery platform and start participating in exciting draws.",
    },
    {
      id: 2,
      icon: Lottery2,
      title: "Get your tickets",
      description:
        "Choose your lucky numbers or let our system pick them for you. Submit your entry and get ready to win big!",
    },
    {
      id: 3,
      icon: Lottery3,
      title: "Win Lottery",
      description:
        "Watch the live draw or check the results. If your numbers match, you win amazing prizes and cash rewards!",
    },
  ];

  return (
    <section className={styles.howToStartSection}>
      <h2 className={styles.heading}>How To Start</h2>
      <p className={styles.subHeading}>
        Follow these easy steps to join our lottery, pick your numbers, and take
        your chance at winning amazing prizes.
      </p>
      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.id} className={styles.stepCard}>
            <span className={styles.stepNumber}>{`0${step.id}`}</span>
            <div className={styles.icon}>
              <Image src={step.icon} alt="Step Icon" />
            </div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToStart;
