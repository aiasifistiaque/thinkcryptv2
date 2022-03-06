import React from 'react';
import SectionHeading from '../home/sectionheading/SectionHeading';
import Page from '../util/Page/Page';
import styles from './Portfoliopage.module.css';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import Link from 'next/link';

const data = [
	{
		src: '/portfolio/home/1',
		name: 'SAMC Bangladesh',
		type: 'Web App',
		href: 'https://samcbangladesh.org',
	},
	{
		src: '/portfolio/home/2',
		name: 'Weather App',
		type: 'iOs & Android App',
		href: 'https://github.com/aiasifistiaque/weatherapp',
	},
	// {
	// 	src: '/portfolio/home/3',
	// 	name: 'Recipe Finder',
	// 	type: 'iOs & Android App',
	// 	href:''
	// },
	{
		src: '/portfolio/home/4',
		name: `Vincent's Sphere`,
		type: 'E-Commerce Web App',
		href: 'https://vincentsphere.com',
	},
	{
		src: '/portfolio/home/3',
		name: 'ArewaBooks App',
		type: 'iOs & Android App',
		href: 'https://play.google.com/store/apps/details?id=com.arewa.arewabooksapp&hl=en_US&gl=US',
	},
	{
		src: '/portfolio/home/8',
		name: 'Grocery Shop',
		type: 'Ecommerce webapp',
		href: 'https://gshop-psi.vercel.app/',
	},
];

const data2 = [
	{
		src: '/portfolio/home/5',
		name: 'Legal Template',
		type: 'Web App',
		href: 'https://template-legal.vercel.app/',
	},
	{
		src: '/portfolio/home/ui',
		name: 'UI/UX projects',
		type: 'UI/UX',
		href: 'https://dribbble.com/thinkcrypt',
	},
	{
		src: '/portfolio/home/6',
		name: 'Arewa Books',
		type: 'Web App',
		href: 'https://arewabooks.com',
	},
	{
		src: '/portfolio/home/7',
		name: 'Dignity International Agency',
		type: 'Web App',
		href: 'https://dignityinternationalagency.com',
	},
	{
		src: '/portfolio/home/ciphertext',
		name: 'Cipher Text',
		type: 'iOs & Android App',
		href: 'https://github.com/aiasifistiaque/chatmama',
	},
];

const Portfoliopage = () => {
	return (
		<Page>
			<div className={styles.container} style={{ marginTop: 64 }}>
				<SectionHeading heading='All of Our Work' subHeading='Our Projects'>
					We{`'`}re passionate about design, innovation, brilliant ideas and the
					execution that brings it all together in one beautiful experience. If
					you are too, call or send us an email to get started.
				</SectionHeading>
				<PortfolioContainer>
					<h2>Our Work</h2>
					<div className={styles.row}>
						<div className={styles.column}>
							{data.map((item, i) => (
								<PortfolioItem item={item} key={i} href='/project' />
							))}
						</div>
						<div className={styles.coltwo}>
							{data2.map((item, i) => (
								<PortfolioItem item={item} key={i} href='/project' />
							))}
						</div>
					</div>
				</PortfolioContainer>
			</div>
		</Page>
	);
};

export default Portfoliopage;
