import styled from 'styled-components';

import charImg from '../../assets/char.png';

export const Container = styled.div<{
	size: number;
	left: number;
	top: number;
	sidePosition: number;
}>`
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	position: absolute;
	left: ${props => props.left}px;
	top: ${props => props.top}px;
	background-image: url(${charImg});
	background-position: 0 ${props => props.sidePosition}px;
`;
