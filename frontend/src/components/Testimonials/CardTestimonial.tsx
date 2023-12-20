import React from "react";
import styles from "./styles";

interface CardTestimonialProps {
  leftImageSrc: string;
  rating: number;
  description: string;
  name: string;
  location: string;
  age: number;
}

const CardTestimonial: React.FC<CardTestimonialProps> = ({
  leftImageSrc,
  rating,
  description,
  name,
  location,
  age,
}) => {
  return (
    <div className={`${styles.cardTestimonial}`}>
      <div className={`${styles.leftCardTestimonial}`}>
        <img src={leftImageSrc} alt={name} />
      </div>
      <div className={`${styles.rightCardTestimonial}`}>
        <div>
          {Array.from({ length: rating }, (_, index) => (
            <img key={index} src="https://i.ibb.co/NjWjckh/star-icon.png" alt="Star Icon" />
          ))}
        </div>
        <p className={`${styles.descCardTestimonial}`}>{description}</p>
        <p className={`fw-bold`}>
          {name} {age}, {location}
        </p>
      </div>
    </div>
  );
};

export default CardTestimonial;
