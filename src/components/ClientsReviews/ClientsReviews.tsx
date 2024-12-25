"use client";
import React, { useState } from "react";
import styles from "./ClientsReviews.module.scss";

const reviews = [
  {
    id: 1,
    name: "Edward",
    role: "Daily Lottery Winner",
    rating: 5,
    feedback: "Winning the daily lottery was an amazing experience!",
  },
  {
    id: 2,
    name: "Charlotte",
    role: "Weekly Lottery Winner",
    rating: 4,
    feedback: "The weekly lottery is exciting and rewarding!",
  },
  {
    id: 3,
    name: "Daniel",
    role: "Monthly Jackpot Winner",
    rating: 5,
    feedback: "Winning the jackpot was life-changing for me.",
  },
  {
    id: 4,
    name: "Sophia",
    role: "Powerball Winner",
    rating: 5,
    feedback: "The Powerball platform is secure and transparent!",
  },
  {
    id: 5,
    name: "James",
    role: "Mega Millions Winner",
    rating: 4,
    feedback: "Mega Millions made my dreams come true!",
  },
  {
    id: 6,
    name: "Olivia",
    role: "Daily Lottery Winner",
    rating: 5,
    feedback: "The daily lottery has been my favorite!",
  },
  {
    id: 7,
    name: "Liam",
    role: "Weekly Lottery Winner",
    rating: 4,
    feedback: "The platform is easy to use and rewarding.",
  },
  {
    id: 8,
    name: "Mia",
    role: "Monthly Jackpot Winner",
    rating: 5,
    feedback: "Winning the jackpot was unbelievable!",
  },
  {
    id: 9,
    name: "Noah",
    role: "Powerball Winner",
    rating: 5,
    feedback: "Powerball is a fantastic experience!",
  },
  {
    id: 10,
    name: "Emma",
    role: "Mega Millions Winner",
    rating: 5,
    feedback: "Mega Millions gave me the chance to dream big.",
  },
];

const ClientsReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 5);

  if (visibleReviews.length < 5) {
    visibleReviews.push(...reviews.slice(0, 5 - visibleReviews.length));
  }

  const handleDotClick = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.clientsReviewsSection}>
      <h2 className={styles.heading}>Clients Reviews</h2>
      <p className={styles.subHeading}>
        Hear what our lottery winners have to say about their experience!
      </p>
      <div className={styles.slider}>
        <button className={styles.arrow} onClick={handlePrev}>
          &#8249;
        </button>
        <div className={styles.reviewsContainer}>
          {visibleReviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <h3 className={styles.name}>{review.name}</h3>
              <p className={styles.role}>{review.role}</p>
              <div className={styles.rating}>
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className={styles.star}>
                    {index < review.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <p className={styles.feedback}>{review.feedback}</p>
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={handleNext}>
          &#8250;
        </button>
      </div>
      <div className={styles.pagination}>
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default ClientsReviews;
