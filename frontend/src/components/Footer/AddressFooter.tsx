import React from "react";
import styles from "./styles";

const AddressFooter: React.FC = () => {
  return (
    <div className={`${styles.addressFooterSection}`}>
      <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
      <p>binarcarrental@gmail.com</p>
      <p>081-233-334-808</p>
    </div>
  );
};

export default AddressFooter;
