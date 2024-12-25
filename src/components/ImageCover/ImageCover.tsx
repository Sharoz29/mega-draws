import Image from "next/image";
import styles from "./ImageCover.module.scss";

interface ImageCoverProps {
  source: string | any;
  header?: string;
  description?: string;
  objectPosition?: string;
  altText?: string;
}

export default function ImageCover({
  source,
  header,
  description,
  objectPosition = "center",
  altText = "Image cover",
}: ImageCoverProps) {
  return (
    <section className={styles.imageContainer} aria-label="Image cover section">
      <div className={styles.bgImageWrapper}>
        <Image
          src={source}
          alt={altText}
          layout="fill"
          objectFit="cover"
          objectPosition={objectPosition}
          loading="lazy"
        />
      </div>
      <div className={styles.imageOverlayContent}>
        {header && <h1 className={styles.imageHeader}>{header}</h1>}
        {description && (
          <p className={styles.imageDescription}>{description}</p>
        )}
      </div>
    </section>
  );
}
