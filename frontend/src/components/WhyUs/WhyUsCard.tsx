import React from 'react';
import styles from './styles';

interface WhyUsCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ iconSrc, title, description }) => {
	return (
		<div className="col-md-3">
			<div className={`${styles.whyUsCard}`}>
				<img className={`${styles.whyUsCardImg}`} src={iconSrc} alt={`${title} Icon`} />
				<h5 className={`${styles.whyUsCardH5}`}>{title}</h5>
				<p className={`${styles.whyUsCardP}`}>{description}</p>
			</div>
		</div>
	);
};

export default WhyUsCard;
