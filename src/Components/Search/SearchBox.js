import React from 'react';
import './Search.css';

import Rate from '../Rate';
const SearchBox = ({setSearchValue,setSearchByRate,SearchByRate}) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				onChange={(event) => setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
			
			<p className="headings"> Search by Rate : </p>
			<div className='Stars'>
			<Rate setSearchByRate={setSearchByRate} rating={SearchByRate} />
			</div>
		</div>
	);
};

export default SearchBox;