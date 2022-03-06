import React from 'react';
import styles from './Homepage.module.css';
import Hero from './hero/Hero';
import Page from '../util/Page/Page';
import SectionHeading from './sectionheading/SectionHeading';
import Projects from './projects/Projects';
import Services from './services/Services';
import Testimonial from './testimonial/Testimonial';

const Homepage = () => {
	return (
		<Page>
			<div className={styles.container}>
				<Hero />
				<SectionHeading
					heading='Meticulously Designed'
					subHeading='Featured Web Projects'
					btnText='View Our Portfolio'
					href='/portfolio'>
					We take pride in all of our designs. Everything is meticulously
					researched, planned, tested and designed to work and look flawlessly.
				</SectionHeading>
				<Projects />
				<SectionHeading
					heading='A symphony of look and function'
					subHeading='Our Services'>
					Our designs must not only look beautiful, but they must also function
					beautifully. A great design not only entices you to touch, but it must
					be intuitive and simple to understand.
				</SectionHeading>
				<Services />
				<Testimonial />
				<SectionHeading
					heading='Let’s design your next project'
					subHeading='Contact Us'
					btnText='Contact Us Today'
					to='/https://docs.google.com/forms/d/e/1FAIpQLSeu0GxkeIBfjuAXlPALET-5S1Dxs6JASbV2CSjv2Yv4YA1vZQ/viewform?usp=sf_link'
					href='/contact'>
					{`We're`} passionate about design, innovation, brilliant ideas and the
					execution that brings it all together in one beautiful experience. If
					you are too, call or send us an email to get started.
				</SectionHeading>
			</div>
		</Page>
	);
};

export default Homepage;
