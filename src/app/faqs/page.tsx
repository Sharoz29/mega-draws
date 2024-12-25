"use client";
import React, { useState } from "react";
import styles from "./LotteryFAQ.module.scss";
import ImageCover from "@/components/ImageCover/ImageCover";
import Faqs from "@/assets/Faq.jpg";

const faqData = [
  {
    question: "How does the lottery work?",
    answer:
      "Players purchase tickets, select their numbers, and wait for the draw. If your numbers match the drawn ones, you win!",
  },
  {
    question: "How can I claim my winnings?",
    answer:
      "Small prizes are automatically credited to your account. For larger prizes, follow the claim instructions in your account dashboard.",
  },
  {
    question: "Is the lottery platform secure?",
    answer:
      "Yes, we use advanced encryption and secure payment methods to ensure your information is safe.",
  },
  {
    question: "Can I play from anywhere?",
    answer:
      "Yes, our platform is accessible globally, but restrictions may apply based on local laws.",
  },
  {
    question: "What happens if I lose my ticket?",
    answer:
      "If you purchased your ticket online, no worries! All tickets are stored digitally in your account.",
  },
  {
    question: "How are the draws conducted?",
    answer:
      "All draws are conducted using a certified random number generator to ensure fairness.",
  },
  {
    question: "Can I participate in multiple lotteries?",
    answer:
      "Absolutely! Our platform supports multiple lotteries, so you can participate in as many as you'd like.",
  },
];

export default function LotteryFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <ImageCover
        objectPosition="center"
        source={Faqs}
        header="Lottery FAQ"
        description="Find answers to the most common questions about our lottery platform."
      />
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <div
                className={styles.question}
                onClick={() => toggleFAQ(index)}
                role="button"
                tabIndex={0}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className={styles.answer}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
