import React from 'react';

import { Link } from 'react-router-dom';

import './Card.scss';

import sprite from '../../assets/icons/sprite.svg';

import default_thumbnail from '../../assets/img/food.jpg';

function Card() {
	return (
		<div className='card'>
			<Link className='text--link'>
				<figure className='card__figure'>
					<img
						className='card__img'
						src={default_thumbnail}
						alt='Food Thumbnail'
					/>
				</figure>
				<h5 className='text--black'>Food Name Here</h5>
			</Link>

			<div className='card__action'>
				<Link
					className='card__action--item text--link text--grey'
					to=''
					target={'_blank'}
					rel='noopener noreferrer'>
					<svg className='card__action--icon'>
						<use xlinkHref={`${sprite}#${'icon-globe'}`} />
					</svg>
					<span>Location</span>
				</Link>
			</div>
		</div>
	);
}

export default Card;
