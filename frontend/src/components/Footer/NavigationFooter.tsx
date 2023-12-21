import React from "react";
import styles from "./styles";

const NavigationFooter: React.FC = () => {
  return (
    <div className={`${styles.navigationFooterSection}`}>
      <a href="#our-services">Our services</a>
      <a href="#why-us">Why Us</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#faq">FAQ</a>
    </div>
  );
};

export default NavigationFooter;
