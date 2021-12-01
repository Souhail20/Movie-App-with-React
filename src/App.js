import React, { useState} from 'react';
import './App.css';
import MovieList from './Components/MovieList/MovieList';
import MovieListHeading from './Components/Header/MovieListHeading';
import SearchBox from './Components/Search/SearchBox';
import AddMovie from './Components/AddMovie';
import MovieData from './Components/MovieList/MovieData';
const App = () => {	
	const [movie, setMovies] = useState(MovieData);
	const addMovie = (k) =>{
		setMovies([...movie,k])
	}	
	const [searchValue, setSearchValue] = useState('');
	const [SearchByRate,setSearchByRate]= useState(1)
	
	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>		
				<MovieListHeading heading='Movie-search'/>		
				<SearchBox setSearchValue={setSearchValue} setSearchByRate={setSearchByRate} SearchByRate={SearchByRate} />
				<AddMovie addMovie={addMovie} />					
			</div>
			<div className='rowe d-inline-flex p-1 col-example '>
				<MovieList moviesList={movie} searchValue={searchValue} SearchByRate={SearchByRate} />	
       		</div>
			  
		</div>
	);
};
export default App;