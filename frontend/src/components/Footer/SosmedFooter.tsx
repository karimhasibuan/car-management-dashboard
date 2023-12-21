import React from "react";
import styles from "./styles";

const SosmedFooter: React.FC = () => {
  return (
    <div className={`${styles.sosmedFooterSection}`}>
      <p>Connect with us</p>
      <div className={`${styles.iconSosmedFooterSection}`}>
        <img src="https://i.ibb.co/0JVCGjc/icon-facebook.png" alt="Facebook Icon" />
        <img src="https://i.ibb.co/JB4QJg6/icon-instagram.png" alt="Instagram Icon" />
        <img src="https://i.ibb.co/BtMqKbP/icon-twitter.png" alt="Twitter Icon" />
        <img src="https://i.ibb.co/26v56N5/icon-mail.png" alt="Mail Icon" />
        <img src="https://i.ibb.co/6X81Ndx/icon-twitch.png" alt="Twitch Icon" />
      </div>
    </div>
  );
};

export default SosmedFooter;
