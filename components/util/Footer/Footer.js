import React from 'react';
import styles from './Footer.module.css';

const data = [
	{
		heading: 'Navigation',
		items: [
			{ name: 'Home', href: '' },
			{ name: 'About', href: '' },
			{ name: 'Contact', href: '' },
		],
	},
	{
		heading: 'Legal',
		items: [
			{ name: 'Privacy Policy', href: '' },
			{ name: 'Terms of Service', href: '' },
		],
	},
	{
		heading: 'Socials',
		items: [
			{ name: 'Facebook', href: '' },
			{ name: 'Instagram', href: '' },
		],
	},
];

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.sections}>
				<div className={styles.section}>
					<h6>Contact Us</h6>
					<p>Tel: (+88) 01828398225, 01799399555</p>
					<p>Email: info@thinkcrypt.io</p>
					<p>Mohammadpur, Dhaka, Bangladesh</p>
				</div>
				<div className={styles.rightSections}>
					{data.map((item, i) => (
						<Section data={item} key={i} />
					))}
				</div>
			</div>
		</div>
	);
};

const Section = ({ data }) => {
	return (
		<div className={styles.section}>
			<h6>{data.heading}</h6>

			{data.items.map((item, i) => (
				<a key={i}>{item.name}</a>
			))}
		</div>
	);
};

export default Footer;
