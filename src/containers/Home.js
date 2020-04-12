import React from 'react';

import './Home.scss';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Foods from './Foods/Foods';
import Filter from '../components/Filter/Filter';

function Home() {
	return (
		<React.Fragment>
			<div className='home'>
				<Jumbotron />
				<Filter />
				<Foods />
			</div>
		</React.Fragment>
	);
}

export default Home;
