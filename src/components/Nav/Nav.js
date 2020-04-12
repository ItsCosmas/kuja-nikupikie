import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';

import './Nav.scss';
import sprite from '../../assets/icons/sprite.svg';

const Nav = () => {
	return (
		<nav className='nav'>
			<Link
				className='nav--brand text--link text--brand text--white'
				to='/'>
				<svg className='nav--icon'>
					<use xlinkHref={`${sprite}#${'icon-home'}`} />
				</svg>
				<span>Kuja Nikupikie</span>
			</Link>
			<div className='nav__action'>
				<SearchBar />
				<ul className='nav--item'>
					{/* <li className='nav--item'>
					<Link
						className='text--link text--white text--nav'
						to='/about'>
						About
					</Link>
				</li>
				{/* <li className='nav--item'>
					<Link
						className='text--link text--white text--nav'
						to='/categories'>
						Categories
					</Link>
				</li>{' '} */}
					<li className='nav--item'>
						<Link
							className='topnav--item--link btn btn--icon'
							to='/random'>
							<svg className='btn--icon-shape'>
								<use xlinkHref={`${sprite}#${'icon-random'}`} />
							</svg>
							<span>Random</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
