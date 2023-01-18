import React from 'react';
import data from './data.js';
import {
	Center,
	Flex,
	Grid,
	Heading,
	Stack,
	Text,
	Link,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import {
	boxShadow,
	boxShadowHover,
	breakpoints,
	colors,
} from '../../lib/constants';
// import Link from 'next/link';

const radius = '4px';

const Container = styled(Stack)`
	margin: 24px 0;

	@media (min-width: ${breakpoints.desktop}) {
		margin: 32px 128px;
	}
`;

const Section = styled(Grid)`
	grid-template-columns: 1fr;
	gap: 0.5rem;
	@media (min-width: ${breakpoints.tab}) {
		//flex-direction: row;
		grid-template-columns: 1fr 1fr;
	}
	@media (min-width: ${breakpoints.desktop}) {
		gap: 1rem;
	}
`;

const Projects = () => {
	return (
		<Container spacing={0}>
			<Section>
				{data.map((item, i) => (
					<Project item={item} key={i} />
				))}
			</Section>
		</Container>
	);
};
const Overlay = styled(Center)`
	border-radius: 2px;
	flex: 1;
	//background-color: rgba(0, 0, 0, 0.35);
	color: white;
	display: flex;
	flex-direction: column;
	height: 100%;
	transition: 0.3s;
	&:hover {
		@media (min-width: ${breakpoints.tab}) {
			//background-color: rgba(0, 0, 0, 0.75);
		}
	}
`;

const Background = styled(Flex)`
	flex: 1;
	background-position: top center;
	background-size: contain;
	width: 100%;
	min-height: 238px;
	background-repeat: no-repeat;
	box-shadow: ${boxShadow};
	transition: 0.3s;
	@media (min-width: ${breakpoints.tab}) {
		background-size: cover;
		max-height: 100px;
	}
	@media (min-width: ${breakpoints.desktop}) {
		min-height: 320px;
		border-radius: ${radius};

		&:hover {
			box-shadow: ${boxShadowHover};
			transform: scale(1.2);
		}
	}
`;

const TextBox = styled(Flex)`
	flex-direction: column;
	flex: 1;
	justify-content: flex-end;
	width: 100%;
	height: 40px;
`;

const TextOverlay = styled(Stack)`
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.6) 75.79%
	);
	backdrop-filter: blur(1px);
	// background: linear-gradient(
	// 	180deg,
	// 	rgba(0, 0, 0, 0) 0%,
	// 	rgba(0, 0, 0, 0.62) 67.19%
	// );
	@media (min-width: ${breakpoints.desktop}) {
		border-bottom-left-radius: ${radius};
		border-bottom-right-radius: ${radius};
	}
`;

const Project = ({ item }) => {
	return (
		<Link href={item.href} isExternal _hover={{ textDecoration: 'none' }}>
			<Flex cursor='pointer' flex={1}>
				<Background bg={`url(${item.src}.svg)`}>
					<Overlay>
						<TextBox>
							<TextOverlay p={3} spacing={0.5}>
								<Heading size='lg'>{item.name}</Heading>
								<Heading size='xs'>{item.type}</Heading>
							</TextOverlay>
						</TextBox>
					</Overlay>
				</Background>
			</Flex>
		</Link>
	);
};

export default Projects;
