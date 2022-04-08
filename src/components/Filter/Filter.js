import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Select from 'react-select';

import './Filter.scss';
import sprite from '../../assets/icons/sprite.svg';

function Filter() {
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	];

	const [filterOpen, setFilterOpen] = useState(false);

	const handleFilterAction = (e) => {
		e.preventDefault();
		setFilterOpen(!filterOpen);
	};

	const displayFilter = (
		<div className='filter__action text--black text--nav'>
			<div className='filter__action--group'>
				<div className='filter__action--wrapper u-margin-bottom-small'>
					<label htmlFor=''>Category</label>
					<input type='radio' name='filter' id='filter' />
				</div>
				<Select options={options} />
			</div>
			<div className='filter__action--group'>
				<div className='filter__action--wrapper u-margin-bottom-small'>
					<label htmlFor=''>Area</label>
					<input type='radio' name='filter' id='filter' />
				</div>
				<Select options={options} />
			</div>{' '}
			<div className='filter__action--group'>
				<div className='filter__action--wrapper u-margin-bottom-small'>
					<label htmlFor=''>Ingredient</label>
					<input type='radio' name='filter' id='filter' />
				</div>
				<Select options={options} />
			</div>
		</div>
	);

	return (
		<div className='filter'>
			<nav className='filter__nav'>
				<h4 className='heading--sub'>The Information Title</h4>
				<ul className='filter__nav--list'>
					{/* <li className='filter__nav--item'>
						<Link
							className='text--link text--black text--nav'
							to='/categories'>
							Categories
						</Link>
					</li>
					<li className='filter__nav--item'>
						{' '}
						<Link
							className='text--link text--black text--nav'
							to='/areas'>
							Areas
						</Link>
					</li>
					<li className='filter__nav--item'>
						{' '}
						<Link
							className='text--link text--black text--nav'
							to='/ingredients'>
							Ingredients
						</Link>
					</li> */}
					<li className='filter__nav--item'>
						<button
							className='topnav__list--link btn btn--icon'
							to='/random'
							onClick={handleFilterAction}>
							<svg className='btn--icon-shape'>
								<use xlinkHref={`${sprite}#${'icon-filter_list'}`} />
							</svg>
							<span>Filter</span>
						</button>
					</li>
				</ul>
			</nav>
			{filterOpen && displayFilter}
		</div>
	);
}

export default Filter;
