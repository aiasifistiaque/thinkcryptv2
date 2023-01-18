import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import { Flex, Image } from '@chakra-ui/react';
import { breakpoints } from '../../lib/constants';

const Container = styled(Flex)`
	height: 4rem;
	align-items: center;
	padding: 0 1.5rem;
	color: white;
	position: fixed;
	width: 100%;
	backdrop-filter: blur(5px);
	@media (min-width: ${breakpoints.desktop}) {
		padding: 0 8rem;
	}
`;

const Logo = styled(Image)`
	cursor: pointer;
	height: 44px;
	width: auto;
	object-fit: contain;
`;

const Header = () => {
	return (
		<Container>
			<Link href='/'>
				<Logo src='/header.png' alt='thinkcrypt.io' />
			</Link>
		</Container>
	);
};

export default Header;
