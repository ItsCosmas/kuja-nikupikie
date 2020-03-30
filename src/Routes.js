import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import App from './containers/App';
import { history } from './history';

const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path='/' component={App} />
			</Switch>
		</Router>
	);
};

export default Routes;
