import React from 'react';
import styles from './PortfolioItem.module.css';
import Link from 'next/link';

const PortfolioItem = ({ item, href }) => {
	return (
		<a
			target='_blank'
			href={item.href}
			rel='noopener noreferrer'
			className={styles.container}>
			<img src={`${item.src}`} alt={item.name} />
			<div className={styles.text}>
				<h6>{item.name}</h6>
				<p>{item.type}</p>
			</div>
		</a>
	);
};

export default PortfolioItem;
