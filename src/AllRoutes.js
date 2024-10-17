import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MatchGame from './match-game/MatchGame';
import HomePage from './Home-Page/HomePage';
import CandyCrush from './sweet-and-sour/SweetAndSour';
import SweetAndSour from './sweet-and-sour/SweetAndSour';

import './App.css';

const AllRoutes = () => {
	return (
		<>
			<div className="nav-bar">
				<h1>
					<Link to={'/'}>Home</Link>
				</h1>

				{/* <li>
						<Link to={'/match-game'}>Match Game</Link>
					</li> */}
			</div>

			<Routes>
				<Route path="/" element={<MatchGame />} />
				<Route path="/match-game" element={<MatchGame />} />
				<Route path="/sweet-and-sour" element={<SweetAndSour />} />
			</Routes>
		</>
	);
};

export default AllRoutes;
