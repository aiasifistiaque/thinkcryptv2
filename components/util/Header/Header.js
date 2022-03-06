import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<div className={styles.header}>
			<Link href='/'>
				<img src='/header.png' alt='thinkcrypt.io' />
			</Link>
		</div>
	);
};

export default Header;
