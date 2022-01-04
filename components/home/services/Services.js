import React from 'react';
import styles from './Services.module.css';
import data from './data.js';

const Services = () => {
	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<Service item={data[0]} />
				<Service item={data[1]} />
			</div>

			<div className={styles.section}>
				<Service item={data[2]} />
				<Service item={data[3]} />
			</div>

			<div className={styles.section}>
				<Service item={data[4]} />
				<Service item={data[5]} />
			</div>
		</div>
	);
};

const Service = ({ item }) => {
	return (
		<div className={styles.item}>
			<img src={`${item.src}.jpg`} alt={item.name} />
			<div className={styles.text}>
				<h5>{item.name}</h5>
				<p>{item.details}</p>
			</div>
		</div>
	);
};

export default Services;
