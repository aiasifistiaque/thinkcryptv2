import React from 'react';
import styles from './Testimonial.module.css';

const Testimonial = () => {
	return (
		<div className={styles.container}>
			<h2>What our clients are saying about us</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur.
			</p>
			<div className={styles.user}>
				<img src='/pp.png' alt='pp' />
				<div className={styles.text}>
					<p>Umar Muhammad</p>
					<h6>Arewa Books Publishers</h6>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
