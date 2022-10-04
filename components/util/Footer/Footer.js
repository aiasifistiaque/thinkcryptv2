import React from 'react';
import styles from './Footer.module.css';

const data = [
	{
		heading: 'Navigation',
		items: [
			{ name: 'Home', href: '/' },
			{ name: 'Portfolio', href: '/portfolio' },
			{
				name: 'Contact',
				href: 'https://docs.google.com/forms/d/e/1FAIpQLSeu0GxkeIBfjuAXlPALET-5S1Dxs6JASbV2CSjv2Yv4YA1vZQ/viewform?usp=sf_link',
			},
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
			{ name: 'Facebook', href: 'https://www.facebook.com/thinkCrypt' },
			{ name: 'Instagram', href: 'https://www.instagram.com/thinkcrypt.io/' },
		],
	},
];

const Footer = () => {
	return (
		<div className={styles.foot}>
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
			<div className={styles.disclaimer}>
				<p>
					{`©2022`}, TestMate Ltd. - thinkcrypt.io is a concern of TestMate Ltd.
					registered under RJSC, Bangladesh
				</p>
			</div>
		</div>
	);
};

const Section = ({ data }) => {
	return (
		<div className={styles.section}>
			<h6>{data.heading}</h6>

			{data.items.map((item, i) => (
				<a key={i} href={item.href}>
					{item.name}
				</a>
			))}
		</div>
	);
};

export default Footer;
