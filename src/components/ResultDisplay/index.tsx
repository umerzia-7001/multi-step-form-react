import React from "react";
import { useFormData } from "../../context";
import styles from "./styles.module.scss";

const ResultDisplay: React.FC<any> = () => {
  const { data } = useFormData();
  const { make, colour, code } = data;

  return (
    <div className={styles.carDetails}>
      <div className={styles.carDetailsContent}>
        <p
          className={`${styles.carDetailsText} ${styles.animated} ${styles.shimmer}`}
        >
          Generated Text
        </p>
        <p
          className={`${styles.carDetailsText} ${styles.animated} ${styles.shimmer}`}
        >
          I have a <span className={styles.carDetailsMake}>{make}</span> and the
          color is <span className={styles.carDetailsColour}>{colour}</span>.
        </p>
        {colour?.toLowerCase() === "red" && (
          <p
            className={`${styles.carDetailsRedText} ${styles.animated} ${styles.shimmer}`}
          >
            THE CAR IS RED! NICE!!
          </p>
        )}
        <p
          className={`${styles.carDetailsCode} ${styles.animated} ${styles.shimmer}`}
        >
          REF: {code}
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;
