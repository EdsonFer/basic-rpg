import styled from 'styled-components';

import mapImg from './assets/map.png';

export const Container = styled.div`
	background-color: #24282f;
	min-height: 100vh;
	color: #fff;
`;

export const Map = styled.div`
	width: 480px;
	height: 480px;
	background-image: url(${mapImg});
	background-position: left top;
	background-size: 100%;
`;
