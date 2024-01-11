import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import styles from '../Style/styles';

const OffCanvasComponent: React.FC<{ show: boolean; onHide: () => void }> = ({ show, onHide }) => {
	return (
		<Offcanvas
			show={show}
			onHide={onHide}
			placement="end"
			style={{
				width: '50%',
			}}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>BCR</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Nav className="navbar-nav">
					<Nav.Item>
						<Nav.Link className="nav-link text-black" href="#our-services">
              Our Services
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className="nav-link text-black" href="#why-us">
              Why Us
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className="nav-link text-black" href="#testimonial">
              Testimonial
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className="nav-link text-black" href="#faq">
              FAQ
						</Nav.Link>
					</Nav.Item>
					<Nav.Item className="py-2">
						<Nav.Link href="#" className={`${styles.btnGreen}  text-white`}>
              Register
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default OffCanvasComponent;
