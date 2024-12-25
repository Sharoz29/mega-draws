import styles from "./WhyChooseUs.module.scss";
import Lottery3 from "@/assets/Lottery-3.png";
import Lottery5 from "@/assets/Lottery-5.png";
import Lottery6 from "@/assets/Lottery-6.png";
import Lottery7 from "@/assets/Lottery-7.png";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: Lottery5,
    title: "Online Lottery",
    description:
      "Participate in your favorite lotteries anytime and anywhere with ease.",
  },
  {
    id: 2,
    icon: Lottery6,
    title: "100% Secure",
    description:
      "Your transactions and personal data are protected with state-of-the-art security.",
  },
  {
    id: 3,
    icon: Lottery3,
    title: "Instant Prizes",
    description:
      "Enjoy instant prizes and delivery for your winnings without delays.",
  },
  {
    id: 4,
    icon: Lottery7,
    title: "Live Support",
    description: "Get 24/7 assistance from our dedicated support team.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseSection}>
      <h2 className={styles.heading}>Why Choose</h2>
      <p className={styles.subHeading}>
        Discover the advantages of using our platform for a seamless lottery
        experience.
      </p>
      <div className={styles.featuresContainer}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.featureCard}>
            <div className={styles.icon}>
              <Image src={feature.icon} alt={feature.title} />
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
