import './sweet-and-sour.css';

import { useEffect, useState } from 'react';

const width = 8;
const candyColors = ['blue', 'green', 'orange', 'purple', 'red', 'yellow'];

const SweetAndSour = () => {
	const [currentColorArrangment, setCurrentColorArrangment] = useState([]);

	/* -- checking columns and rows -- */

	//columns of 3
	const checkColumnOfThree = () => {
		for (let i = 0; i < 47; i++) {
			const columnOfThree = [i, i + width, i + width * 2];
			const decidedColor = currentColorArrangment[i];
			if (
				columnOfThree.every(
					(square) => currentColorArrangment[square] === decidedColor
				)
			) {
				columnOfThree.forEach(
					(square) => (currentColorArrangment[square] = '')
				);
			}
		}
	};

	//columns of 4
	const checkColumnOfFour = () => {
		for (let i = 0; i < 39; i++) {
			const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
			const decidedColor = currentColorArrangment[i];
			if (
				columnOfFour.every(
					(square) => currentColorArrangment[square] === decidedColor
				)
			) {
				columnOfFour.forEach((square) => (currentColorArrangment[square] = ''));
			}
		}
	};

	//rows of 3
	const checkRowOfThree = () => {
		for (let i = 0; i < 64; i++) {
			const rowOfThree = [i, i + 1, i + 2];
			const decidedColor = currentColorArrangment[i];
			const notValid = [
				6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
			];

      if (notValid.includes(i)) continue 

			if (
				rowOfThree.every(
					(square) => currentColorArrangment[square] === decidedColor
				)
			) {
				rowOfThree.forEach((square) => (currentColorArrangment[square] = ''));
			}
		}
	};

  //rows of 4
  const checkRowOfFour = () => {
		for (let i = 0; i < 64; i++) {
			const rowOfFour = [i, i + 1, i + 2, i + 4];
			const decidedColor = currentColorArrangment[i];
			const notValid = [
				5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64,
			];

      if (notValid.includes(i)) continue 

			if (
				rowOfFour.every(
					(square) => currentColorArrangment[square] === decidedColor
				)
			) {
				rowOfFour.forEach((square) => (currentColorArrangment[square] = ''));
			}
		}
	};

	useEffect(() => {
		const timer = setInterval(() => {
      checkRowOfFour();
			checkColumnOfFour();
			checkColumnOfThree();
      checkRowOfThree();


			setCurrentColorArrangment([...currentColorArrangment]);
		}, 100);

		return () => clearInterval(timer);
	}, [checkRowOfThree, checkRowOfFour, checkColumnOfFour, checkColumnOfThree, currentColorArrangment]);

	/* -- checking columns and rows -- */

	/*------create game board------*/
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
	/*------end of create game board------*/

	return (
		<div className="sas-app">
			<div className="game">
				{currentColorArrangment.map((candyColor, index) => (
					<img
						alt={candyColor}
						key={index}
						style={{ backgroundColor: candyColor }}
					/>
				))}
			</div>
		</div>
	);
};

export default SweetAndSour;
