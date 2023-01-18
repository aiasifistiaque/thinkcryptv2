import React from 'react';
import styles from './SectionHeading.module.css';
import Link from 'next/link';
import { Title, Subtitle, Text, Container, Row, Right, Left } from './styles';

import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { breakpoints, colors, links } from '../../lib/constants';

const Divider = styled(Flex)`
	height: 10px;
	width: 80px;
	background-color: ${colors.primary};
	margin: 1rem 0 1.5rem 0;
	@media (min-width: ${breakpoints.desktop}) {
		margin-bottom: 2rem;
	}
`;

const SectionHeading = ({
	subHeading,
	heading,
	children,
	btnText,
	href,
	to,
	F,
}) => {
	const cotactButtom = (
		<a
			target='_blank'
			href={links.contact}
			rel='noopener noreferrer'
			className={styles.button}>
			<p>{btnText}</p>
		</a>
	);
	const top = (
		<>
			<Left>
				<Subtitle>{subHeading}</Subtitle>
			</Left>
			<Right>
				<Title>{heading}</Title>
				<Divider />
			</Right>
		</>
	);
	const bottom = (
		<>
			<Left />
			<Right>
				<Text>{children}</Text>
				{to
					? cotactButtom
					: href && (
							<Link href={href}>
								<div className={styles.button}>
									<p>{btnText}</p>
								</div>
							</Link>
					  )}
			</Right>
		</>
	);

	return (
		<Container>
			<Row>{top}</Row>
			<Row>{bottom}</Row>
		</Container>
	);
};

export default SectionHeading;
