import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './styles';

const NavigationTestimonial: React.FC = () => {
	return (
		<div className={`${styles.arrow}`}>
			<div className={`${styles.arrowWidth}`}>
				<ArrowBackIosNewIcon className={`${styles.leftArrow}`} />
				<ArrowForwardIosIcon className={`${styles.rightArrow}`} />
			</div>
		</div>
	);
};

export default NavigationTestimonial;
