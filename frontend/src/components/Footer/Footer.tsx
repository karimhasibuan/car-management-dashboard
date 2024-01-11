import React from 'react';
import { Container } from 'react-bootstrap';
import AddressFooter from './AddressFooter';
import NavigationFooter from './NavigationFooter';
import SosmedFooter from './SosmedFooter';
import CopyrightFooter from './CopyrightFooter';
import styles from './styles';

const FooterSection: React.FC = () => {
	return (
		<Container>
			<div className={`${styles.footerSection}`}>
				<AddressFooter />
				<NavigationFooter />
				<SosmedFooter />
				<CopyrightFooter />
			</div>
		</Container>
	);
};

export default FooterSection;
