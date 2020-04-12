import React from 'react';

import './SearchBar.scss';

import sprite from '../../assets/icons/sprite.svg';

function SearchBar() {
	return (
		<form className='searchbar'>
			<input
				type='search'
				className='searchbar__input'
				placeholder='Search for a meal'
			/>
			<button className='searchbar__button'>
				<svg className='searchbar__icon'>
					<use xlinkHref={`${sprite}#icon-search`} />
				</svg>
			</button>
		</form>
	);
}

export default SearchBar;
