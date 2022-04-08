import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';

import Home from './containers/Home';
import { history } from './history';
import Food from './containers/Food/Food';

const AppRoutes = () => {
	return (
		<Router location={history.location} navigator={history}>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/recipe/:id' element={<Food />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
