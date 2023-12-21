import React from "react";
import styles from "./styles";

const CopyrightFooter: React.FC = () => {
  return (
    <div className={`${styles.copyrightFooterSection}`}>
      <p>Copyright Binar 2022</p>
      <a href="#" className={`${styles.logoFooter}`}></a>
    </div>
  );
};

export default CopyrightFooter;
