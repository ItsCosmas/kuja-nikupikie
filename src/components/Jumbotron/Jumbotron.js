import React from 'react';
import { Link } from 'react-router-dom';

import './Jumbotron.scss';
import SearchBar from '../SearchBar/SearchBar';
import sprite from '../../assets/icons/sprite.svg';

const Jumbotron = () => {
	return (
		<div className='jumbotron'>
			<div className='jumbotron__container'>
				<div className='jumbotron__cta'>
					<h1 className='heading--super'>Kuja Nikupikie</h1>
					<p className='text--cta text--white u-margin-top-small u-margin-bottom-small'>
						Welcome to kuja nikupikie. The Open Source Recipe app
					</p>
					<SearchBar />
					<p className='text--cta text--white u-margin-top-small u-margin-bottom-small'>
						Not Sure What to Cook? Try a random meal.
					</p>
					<div>
						<Link
							className='topnav--item--link btn btn--icon'
							to='/random'>
							<svg className='btn--icon-shape'>
								<use xlinkHref={`${sprite}#${'icon-random'}`} />
							</svg>
							<span>Random</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Jumbotron;
