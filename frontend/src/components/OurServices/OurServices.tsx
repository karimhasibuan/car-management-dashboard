import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles";

const OurService: React.FC = () => {
  return (
    <Container id="our-services" className={`container ${styles.ourServices}`}>
      <Row className="mx-auto">
        <Col sm={6}>
          <div className={`${styles.leftServiceSection}`}>
            <img src="https://i.ibb.co/dJx6YvX/img-service.png" alt="" />
          </div>
        </Col>
        <Col sm={6}>
          <div className={`${styles.rightServiceSection}`}>
            <h4 className="fw-bold mb-4">Best Car Rental for any kind of trip in (Lokasimu)!</h4>
            <div className="content-list-services">
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah
                dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk
                perjalanan wisata, bisnis, wedding, meeting, dll.
              </p>
              <div className="list-item-services mt-3">
                <div className={`${styles.pointServices}`}>
                  <img src="https://i.ibb.co/ZNQqgg6/checklist.png" alt="" />
                  <p className={`${styles.pointServicesP}`}>
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                  </p>
                </div>
                <div className={`${styles.pointServices}`}>
                  <img src="https://i.ibb.co/ZNQqgg6/checklist.png" alt="" />
                  <p className={`${styles.pointServicesP}`}>
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                  </p>
                </div>
                <div className={`${styles.pointServices}`}>
                  <img src="https://i.ibb.co/ZNQqgg6/checklist.png" alt="" />
                  <p className={`${styles.pointServicesP}`}>Sewa Mobil Jangka Panjang Bulanan</p>
                </div>
                <div className={`${styles.pointServices}`}>
                  <img src="https://i.ibb.co/ZNQqgg6/checklist.png" alt="" />
                  <p className={`${styles.pointServicesP}`}>
                    Gratis Antar - Jemput Mobil di Bandara
                  </p>
                </div>
                <div className={`${styles.pointServices}`}>
                  <img src="https://i.ibb.co/ZNQqgg6/checklist.png" alt="" />
                  <p className={`${styles.pointServicesP}`}>
                    Layanan Airport Transfer / Drop In Out
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OurService;
