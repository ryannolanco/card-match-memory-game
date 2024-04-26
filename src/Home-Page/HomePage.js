import "../styles/HomePage.css"

import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
	return (
		<div className="home-page">
			<h1>hello</h1>
			<div className="grid-container">
				<div className="item3">
					<Link to={'match-game'}>
						<img
							className="homepage-screenshots"
							alt="screenshot of game"
							src="./images/home-page-images/memory-game-screenshot.png"
						/>
					</Link>
				</div>
        <div className="item3">
					<Link to={'match-game'}>
						<img
							className="homepage-screenshots"
							alt="screenshot of game"
							src="./images/home-page-images/memory-game-screenshot.png"
						/>
					</Link>
				</div>
        <div className="item3">
					<Link to={'match-game'}>
						<img
							className="homepage-screenshots"
							alt="screenshot of game"
							src="./images/home-page-images/memory-game-screenshot.png"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
