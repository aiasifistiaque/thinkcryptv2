import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<div className={styles.container}>
			<div className={styles.overlay}>
				<h1>
					We Build
					<br /> Digital Experience
				</h1>
				<div className={styles.h1Border} />
				<h3>
					At thinkcrypt.io, we offer a complete range of services that build up
					business value, from the initial idea and formulation of product
					strategy, through building a prototype and testing it with users,
					right to the creation of the product itself.
				</h3>
			</div>
		</div>
	);
};

export default Hero;
