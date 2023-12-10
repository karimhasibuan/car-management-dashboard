import React, { useState } from "react";
import styles from "./styles";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import OffCanvasComponent from "./OffCanvas";
import MenuIcon from "@mui/icons-material/Menu";

const NavbarComponent: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className={styles.greyBg}>
      <Container fluid>
        <Navbar expand="lg" className={`pt-4`} collapseOnSelect>
          <Container>
            <Navbar.Brand href="#" className={styles.logo}></Navbar.Brand>
            <MenuIcon
              fontSize={`large`}
              className={`d-lg-none`}
              style={{
                cursor: "pointer",
              }}
              onClick={handleShow}
            />
            <Navbar.Collapse className={`justify-content-end`}>
              <Nav className={`navbar-nav`}>
                <Nav.Link href="#our-services" className={`text-black`}>
                  Our Services
                </Nav.Link>
                <Nav.Link href="#why-us" className={`text-black`}>
                  Why Us
                </Nav.Link>
                <Nav.Link href="#testimonial" className={`text-black`}>
                  Testimonial
                </Nav.Link>
                <Nav.Link href="#faq" className={`text-black`}>
                  FAQ
                </Nav.Link>
                <Nav.Link href="#" className={`${styles.btnGreen} d-none d-lg-block text-white`}>
                  Register
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <OffCanvasComponent show={show} onHide={handleClose} />
      </Container>
    </div>
  );
};

export default NavbarComponent;
