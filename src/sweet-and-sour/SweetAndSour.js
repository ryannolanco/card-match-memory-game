import './sweet-and-sour.css';

import { useEffect, useState } from 'react';

const width = 8;
const candyColors = ['blue', 'green', 'orange', 'purple', 'red', 'yellow'];

const SweetAndSour = () => {
	const [currentColorArrangment, setCurrentColorArrangment] = useState([]);

	const createBoard = () => {
		const randomColorArrangment = [];
		for (let i = 0; i < width * width; i++) {
			const randomColor =
				candyColors[Math.floor(Math.random() * candyColors.length)];
			randomColorArrangment.push(randomColor);
		}
		setCurrentColorArrangment(randomColorArrangment);
	};

	useEffect(() => {
		createBoard();
	}, []);

	return (
		<div className="sas-app">
			<div className="game">
				{currentColorArrangment.map((candyColor, index) => (
					<img
						alt="candy color"
						key={index}
						style={{ backgroundColor: candyColor }}
					/>
				))}
			</div>
		</div>
	);
};

export default SweetAndSour;
