import React from "react";
import { Container } from "react-bootstrap";
import WhyUsUpper from "./WhyUsUpper";
import WhyUsRow from "./WhyUsRow";
import styles from "./styles";

const WhyUsComponent: React.FC = () => {
  return (
    <Container>
      <div id="why-us" className={`${styles.whyUs}`}>
        <WhyUsUpper />
        <WhyUsRow />
      </div>
    </Container>
  );
};

export default WhyUsComponent;
