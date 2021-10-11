import { Container, Map } from './App.styles';
import { GlobalStyle } from './styles/global';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';
import { useEffect } from 'react';

export function App() {
	const char = useCharacter();

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
	}, []);

	const handleKeyDown = (e: KeyboardEvent) => {
		switch (e.code) {
			case 'KeyA':
			case 'ArrowLeft':
				char.moveLeft();
				break;

			case 'KeyW':
			case 'ArrowUp':
				char.moveUp();
				break;

			case 'KeyD':
			case 'ArrowRight':
				char.moveRight();
				break;

			case 'KeyS':
			case 'ArrowDown':
				char.moveDown();
				break;
		}
	};

	return (
		<>
			<Container>
				<Map>
					<Character x={char.x} y={char.y} side={char.side} />
				</Map>
			</Container>
			<GlobalStyle />
		</>
	);
}
