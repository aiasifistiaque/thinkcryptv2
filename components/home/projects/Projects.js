import React from 'react';
import styles from './Projects.module.css';
import data from './data.js';

const Projects = () => {
	return (
		<div className={styles.container}>
			<div className={styles.section}>
				<Project item={data[0]} />
				<Project item={data[1]} />
			</div>
			<div className={styles.section}>
				<Project item={data[2]} />
				<Project item={data[3]} />
			</div>
			<div className={styles.section}>
				<Project item={data[4]} />
				<Project item={data[5]} />
			</div>
		</div>
	);
};

const Project = ({ item }) => {
	return (
		<div
			className={styles.item}
			style={{ backgroundImage: `url(${item.src}.jpg)` }}>
			{/* <img src={`${item.src}.jpg`} alt={item.name} /> */}
			<div className={styles.lay} />
			<div className={styles.overlay}>
				<h6>{item.name}</h6>
				<p>{item.type}</p>
			</div>
		</div>
	);
};

export default Projects;
