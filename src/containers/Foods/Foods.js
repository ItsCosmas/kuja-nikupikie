import React from 'react';

import './Foods.scss';
import Card from '../../components/Card/Card';

function Foods() {
	return (
		<>
			<div className='u-section-divider'>
				<h4 className='heading--sub'>Foods</h4>
			</div>
			<div className='foods'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</>
	);
}

export default Foods;
