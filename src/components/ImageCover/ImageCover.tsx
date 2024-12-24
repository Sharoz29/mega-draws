import styles from "./ImageCover.module.scss";

interface ImageCoverProps {
  source: string;
  header?: string;
  description?: string;
  objectPosition?: string;
  altText?: string;
}

export default function ImageCover({
  source,
  header,
  description,
  objectPosition,
  altText = "Image cover",
}: ImageCoverProps) {
  return (
    <section className={styles.imageContainer} aria-label="Image cover section">
      <img
        src={source}
        alt={altText}
        className={styles.bgImage}
        style={{ objectPosition: objectPosition }}
        loading="lazy"
      />
      <div className={styles.imageOverlayContent}>
        {header && <h1 className={styles.imageHeader}>{header}</h1>}
        {description && (
          <p className={styles.imageDescription}>{description}</p>
        )}
      </div>
    </section>
  );
}
