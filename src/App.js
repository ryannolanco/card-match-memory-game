import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './AllRoutes';



function App() {
	return (
		<div>
			<Router>
				<AllRoutes />
			</Router>
		</div>
	);
}

export default App;
