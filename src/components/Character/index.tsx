import { CharacterSides } from '../../types/CharacterSiders';
import { Container } from './styles';

interface CharacterProps {
	x: number;
	y: number;
	side: CharacterSides;
}

export function Character({ x, y, side }: CharacterProps) {
	const size = 30;
	const sides = {
		down: 0,
		left: -30,
		right: -60,
		up: -90,
	};
	return (
		<Container
			size={size}
			left={x * size}
			top={y * size}
			sidePosition={sides[side] ?? 0}
		></Container>
	);
}
