import React from "react";
import { Container } from "react-bootstrap";
import stylesCTABanner from "./styles";
import styles from "../Style/styles";

const CTABanner: React.FC = () => {
  return (
    <Container>
      <div className={`${stylesCTABanner.ctabannerSection} ${styles.blueDarkBg}`}>
        <h3 className={`${stylesCTABanner.ctabannerH3}`}>Sewa Mobil di (Lokasimu) Sekarang</h3>
        <p className={`${stylesCTABanner.ctabannerP}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <button className={`${styles.btnGreen} text-white mb-5`}>Mulai Sewa Mobil</button>
      </div>
    </Container>
  );
};

export default CTABanner;
