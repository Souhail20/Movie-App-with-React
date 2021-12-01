import './Movie.css';
import React from 'react';
import Rate from '../Rate'
const MovieList = ({moviesList,searchValue,SearchByRate}) => {
    
    return (
        <>
            <div className='image-container '>
                {moviesList
                    .filter((el) => el.Title.toLowerCase().includes(searchValue.toLowerCase().trim())
                    && el.rating>=SearchByRate)
                    .map((movie, index) => (
                        <div className="card" key={index}>
                            <img
                                className="movie__image"
                                src={movie.Poster}
                                alt="postal" />
                            <div className="flex__card">
                                <p className="heading">{movie.Title}</p>
                                <p className="paragraph">{movie.description}</p>
                                <Rate rating={movie.rating} />
                                <br />
                            </div>
                        </div>))}
            </div>
            
        </>
    )
    };

export default MovieList;