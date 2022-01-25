import React from 'react';
import styles from './PortfolioItem.module.css';
import Link from 'next/link';

const PortfolioItem = ({ item, href }) => {
	return (
		<Link href={href}>
			<div className={styles.container}>
				<img src={`${item.src}.jpg`} alt={item.name} />
				<div className={styles.text}>
					<h6>{item.name}</h6>
					<p>{item.type}</p>
				</div>
			</div>
		</Link>
	);
};

export default PortfolioItem;
