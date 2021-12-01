import React from 'react';
import './Header.css';

const MovieListHeading = (props) => {
	return (
		<div className='col'>
		<h1>{props.heading}</h1>	
		</div>
	);
};

export default MovieListHeading;