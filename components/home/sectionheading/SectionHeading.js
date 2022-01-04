import React from 'react';
import styles from './SectionHeading.module.css';

const SectionHeading = ({ subHeading, heading, children, btnText, href }) => {
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
					{href && (
						<div className={styles.button}>
							<p>{btnText}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SectionHeading;
