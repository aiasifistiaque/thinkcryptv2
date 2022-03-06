import React from 'react';
import styles from './SectionHeading.module.css';
import Link from 'next/link';

const SectionHeading = ({
	subHeading,
	heading,
	children,
	btnText,
	href,
	to,
	F,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.left}>
					<h5>{subHeading}</h5>
				</div>
				<div className={styles.right}>
					<h2>{heading}</h2>
					<div className={styles.border} />
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.left} />
				<div className={styles.right}>
					<p>{children}</p>
					{to ? (
						<a
							target='_blank'
							href='https://docs.google.com/forms/d/e/1FAIpQLSeu0GxkeIBfjuAXlPALET-5S1Dxs6JASbV2CSjv2Yv4YA1vZQ/viewform?usp=sf_link'
							rel='noopener noreferrer'
							className={styles.button}>
							<p>{btnText}</p>
						</a>
					) : (
						href && (
							<Link href={href}>
								<div className={styles.button}>
									<p>{btnText}</p>
								</div>
							</Link>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default SectionHeading;
