import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../Style/styles";
import stylesJumbotron from "./styles";

const JumbotronComponent: React.FC = () => {
  return (
    <div className={`${styles.greyBg} text-white`}>
      <Row className={`${stylesJumbotron.headerSection}`}>
        <Col sm={6} className={`${stylesJumbotron.leftHeaderSection}`}>
          <div className={`${stylesJumbotron.leftHeaderSectionContent}`}>
            <h3 className={`${stylesJumbotron.leftHeaderSectionH3} text-black fw-bolder mb-3`}>
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h3>
            <p className={`text-black mb-3`}>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan
              harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <a href="#" className={`${styles.btnGreen} text-white text-decoration-none p-2 `}>
              Mulai Sewa Mobil
            </a>
          </div>
        </Col>
        <Col sm={6}>
          <img
            src="https://i.postimg.cc/FRsd03mt/img-car.png"
            alt="img-car"
            className={`${stylesJumbotron.rightHeaderSectionImg}`}
          />
        </Col>
      </Row>
    </div>
  );
};

export default JumbotronComponent;