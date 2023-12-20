import React from "react";
import { Container } from "react-bootstrap";
import UpperTestimonial from "./UpperTestimonial";
import LowerTestimonial from "./LowerTestimonial";
import NavigationTestimonial from "./NavigationTestimonial";
import styles from "./styles";

const Testimonial: React.FC = () => {
  return (
    <Container>
      <div className={`${styles.testimonial}`}>
        <UpperTestimonial />
        <LowerTestimonial />
        <NavigationTestimonial />
      </div>
    </Container>
  );
};

export default Testimonial;
