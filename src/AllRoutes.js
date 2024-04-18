import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MatchGame from './match-game/MatchGame';
import HomePage from './Home-Page/HomePage';

const AllRoutes = () => {
	return (
		<>
			<div className="nav-bar">
				<ul>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/match-game'}>Match Game</Link>
					</li>
				</ul>
			</div>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/match-game" element={<MatchGame />} />
			</Routes>
		</>
	);
};

export default AllRoutes;
