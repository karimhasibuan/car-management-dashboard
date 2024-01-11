import React from 'react';
import CardTestimonial from './CardTestimonial';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import styles from './styles';

const LowerTestimonial: React.FC = () => {
	const glideOptions = {
		type: 'carousel',
		slidesToShow: undefined,
		draggable: true,
		rewind: true,
		itemWidth: 619,
		exactWidth: true,
	};

	return (
		<div className={`${styles.lowerTestimonial}`}>
			<Glider {...glideOptions}>
				<CardTestimonial
					leftImageSrc={'https://i.ibb.co/yWgyNmR/img-photo-man.png'}
					rating={5}
					description={
						'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”'
					}
					name={'John Doe'}
					age={32}
					location={'Bromo'}
				/>
				<CardTestimonial
					leftImageSrc={'https://i.ibb.co/yWgyNmR/img-photo-man.png'}
					rating={5}
					description={
						'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”'
					}
					name={'John Doe'}
					age={32}
					location={'Bromo'}
				/>
				<CardTestimonial
					leftImageSrc={'https://i.ibb.co/dKk5kYw/img-photo-woman.png'}
					rating={5}
					description={
						'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”'
					}
					name={'John Doe'}
					age={32}
					location={'Bromo'}
				/>
			</Glider>
		</div>
	);
};

export default LowerTestimonial;
