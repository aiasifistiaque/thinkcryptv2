import React from 'react';
import SectionHeading from '../home/sectionheading/SectionHeading';
import Page from '../util/Page/Page';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import { Heading, Stack, Flex, Grid } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints } from '../lib/constants';

const data = [
	{
		src: '/portfolio/live-fresh.svg',
		name: 'Live Fresh',
		type: 'e-commerce',
		href: 'https://livefreshbd.com/',
	},
	{
		src: '/portfolio/netsooon.svg',
		name: 'Netsooon',
		type: 'Social Media Webapp',
		href: 'https://netsooon.vercel.app/',
	},
	{
		src: '/portfolio/checkliiist.jpg',
		name: 'Checkliiist Inventory Management system',
		type: 'Inventory Management Saas',
		href: 'https://checkliiist.com',
	},

	{
		src: '/portfolio/home/6.jpg',
		name: 'Arewa Books',
		type: 'Web App',
		href: 'https://arewabooks.com',
	},
	{
		src: '/portfolio/home/1.jpg',
		name: 'SAMC Bangladesh',
		type: 'Web App',
		href: 'https://samcbangladesh.org',
	},
	{
		src: '/portfolio/home/ui.jpg',
		name: 'UI/UX projects',
		type: 'UI/UX',
		href: 'https://dribbble.com/thinkcrypt',
	},

	{
		src: '/portfolio/home/2.jpg',
		name: 'Weather App',
		type: 'iOs & Android App',
		href: 'https://github.com/aiasifistiaque/weatherapp',
	},

	{
		src: '/portfolio/home/3.jpg',
		name: 'ArewaBooks App',
		type: 'iOs & Android App',
		href: 'https://play.google.com/store/apps/details?id=com.arewa.arewabooksapp&hl=en_US&gl=US',
	},
];

const data2 = [
	{
		src: '/portfolio/deshi-diary.svg',
		name: 'Deshi Diary',
		type: 'Business Listing Web app',
		href: 'https://deshidiary.vercel.app/',
	},
	{
		src: '/portfolio/vincent-sphere.svg',
		name: `Vincent's Sphere`,
		type: 'E-Commerce Web App',
		href: 'https://vincentsphere.com',
	},
	{
		src: '/portfolio/home/8.jpg',
		name: 'Grocery Shop',
		type: 'Ecommerce webapp',
		href: 'https://gshop-psi.vercel.app/',
	},
	{
		src: '/portfolio/home/7.jpg',
		name: 'Dignity International Agency',
		type: 'Web App',
		href: 'https://dignityinternationalagency.com',
	},

	{
		src: '/portfolio/home/ciphertext.jpg',
		name: 'Cipher Text',
		type: 'iOs & Android App',
		href: 'https://github.com/aiasifistiaque/chatmama',
	},
	{
		src: '/portfolio/home/5.jpg',
		name: 'Legal Template',
		type: 'Web App',
		href: 'https://template-legal.vercel.app/',
	},
];

const Row = styled(Grid)`
	grid-template-columns: 1fr;
	gap: 1rem;
	margin-top: 2rem;

	@media (min-width: ${breakpoints.desktop}) {
		flex-direction: row;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
	}
`;

const PortfolioContainer = styled(Flex)`
	background-color: whitesmoke;
	min-height: 100vh;
	padding: 24px;
	flex-direction: column;

	@media (min-width: ${breakpoints.desktop}) {
		padding: 128px;
	}
`;

const Portfoliopage = () => {
	return (
		<Page>
			<Stack spacing={4}>
				<SectionHeading heading='All of Our Work' subHeading='Our Projects'>
					We{`'`}re passionate about design, innovation, brilliant ideas and the
					execution that brings it all together in one beautiful experience. If
					you are too, call or send us an email to get started.
				</SectionHeading>
				<PortfolioContainer>
					<Heading size='xl'>Our Work</Heading>
					<Row>
						<Stack spacing={10}>
							{data.map((item, i) => (
								<PortfolioItem item={item} key={i} href='/project' />
							))}
						</Stack>
						<Stack spacing={10}>
							{data2.map((item, i) => (
								<PortfolioItem item={item} key={i} href='/project' />
							))}
						</Stack>
					</Row>
				</PortfolioContainer>
			</Stack>
		</Page>
	);
};

export default Portfoliopage;
