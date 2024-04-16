import React, { useEffect, useState } from 'react';
import './App.css';

//components
import SingleCard from './components/SingleCard';

const cardImages = [
	{ src: './images/flower1.jpg', matched: false },
	{ src: './images/flower2.jpg', matched: false },
	{ src: './images/flower3.jpg', matched: false },
	{ src: './images/flower4.jpg', matched: false },
	{ src: './images/flower5.jpg', matched: false },
	{ src: './images/flower6.jpg', matched: false },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);

	//shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setCards(shuffledCards);
		setTurns(0);
		console.log(cards, turns);
	};


	///reset cards 
	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns(prevTurns => prevTurns + 1)
	}




	// Check if cards are a match function 
	useEffect(() => {
		if (choiceOne && choiceTwo) {
			if (choiceOne.src === choiceTwo.src) {
				setCards(prevCards => {
					return prevCards.map(card => {
						if (card.src === choiceOne.src) {
							return {...card, matched: true}
						} else {
							return card
						}
					})
				})
				
				resetTurn();
			} else {
				
				resetTurn()
			}
		}
	}, [choiceOne, choiceTwo])

	console.log(cards)


	//handle a choice
	const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

	return (
		<div className="App">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>

			<div className="card-grid">
				{cards.map((card) => (
					<SingleCard 
            card={card} 
            key={card.id} 
            handleChoice={handleChoice} />
				))}
			</div>
		</div>
	);
}

export default App;
