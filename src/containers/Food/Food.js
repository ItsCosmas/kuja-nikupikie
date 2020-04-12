import React from 'react';

import './Food.scss';
import Nav from '../../components/Nav/Nav';
import IngredientsGallery from './IngredientsGallery';
import Instructions from './Instructions';
import default_thumbnail from '../../assets/img/food.jpg';

function Food() {
	return (
		<>
			<Nav />
			<div className='food'>
				<div className='flex__column'>
					<div className='flex__row'>
						<figure className='food__figure'>
							<img
								src={default_thumbnail}
								alt='Food Thumbnail'
								className='food__img'
							/>
						</figure>
						<div className='food__info'>Some Info Here</div>
					</div>
					<div className='food__recipe'>
						<div className='flex__row'></div>
						<IngredientsGallery />
						<Instructions />
					</div>
				</div>
			</div>
		</>
	);
}

export default Food;
