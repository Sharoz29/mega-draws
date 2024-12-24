"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./VideoCover.module.scss";

interface VideoCoverProps {
  source: string;
  header?: string;
  description?: string;
}

export default function VideoCover({
  source,
  header,
  description,
}: VideoCoverProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.videoContainer} aria-label="Video cover section">
      <video
        ref={videoRef}
        loop
        muted
        autoPlay={isVisible}
        className={styles.bgVideo}
      >
        {isVisible && <source src={source} type="video/mp4" />}
        {isVisible && (
          <source src={source.replace(".mp4", ".webm")} type="video/webm" />
        )}
        Your browser does not support the video tag.
      </video>
      <header className={styles.overlayContent}>
        {header && <h1 className={styles.header}>{header}</h1>}
        {description && <p className={styles.description}>{description}</p>}
      </header>
    </section>
  );
}
