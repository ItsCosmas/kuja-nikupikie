import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import { history } from './history';
import Food from './containers/Food/Food';

const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path='/' component={Home} />

				<Route path='/recipe/:id' component={Food} />
			</Switch>
		</Router>
	);
};

export default Routes;
