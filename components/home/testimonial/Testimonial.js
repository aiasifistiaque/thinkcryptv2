import React from 'react';
import styles from './Testimonial.module.css';

const Testimonial = () => {
	return (
		<div className={styles.container}>
			<h2>What our clients are saying about us</h2>
			<p>
				I am really thankful to the thinkcrypt team for making this amazing
				website and app for our business. Thinkcrypt has fulfilled all of our
				demands and queries. They have a very strong team of developers. We will
				surely be working with thinkcrypt team for future colaborations. We wish
				all the best to ThinkCrypt Team.
			</p>
			<div className={styles.user}>
				<img src='/pp.jpeg' alt='pp' />
				<div className={styles.text}>
					<p>Shahbaz Amin Bhuiyan</p>
					<h6>Vincent{`'`}s Sphere</h6>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
