import React from 'react';
import styles from './Page.module.css';
import Head from 'next/head';
import Footer from '../Footer/Footer';

const Page = ({ children }) => {
	return (
		<>
			<Head>
				<title>thinkcrypt.io</title>
				<meta property='title' content='thinkcrypt.io' />
				<link rel='icon' href='/favicon.ico' />

				<meta
					name='description'
					content='At thinkcrypt.io, we offer a complete range of services that build up business value, from the initial idea and formulation of product strategy, through building a prototype and testing it with users, right to the creation of the product itself.'></meta>
				<meta property='og:title' content='thinkcrypt.io' key='ogtitle' />
				<meta
					property='og:description'
					content='At thinkcrypt.io, we offer a complete range of services that build up business value, from the initial idea and formulation of product strategy, through building a prototype and testing it with users, right to the creation of the product itself.'
					key='ogdesc'
				/>

				<meta property='og:image' content='/hero.jpeg' key='ogimage' />
				<meta
					property='og:site_name'
					content={'thinkcrypt.io'}
					key='ogsitename'
				/>
			</Head>
			<main className={styles.container}>{children}</main>
			<Footer />
		</>
	);
};

export default Page;
