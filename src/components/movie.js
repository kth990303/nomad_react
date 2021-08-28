import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import "./movie.css"

function Movie({id, year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <Link to={{
                pathname:`/movie/${id}`,
                state:{
                    year, title, summary, poster, genres
                }
            }}>
            <h3 className="movie__title">{title}</h3>
            </Link>
            <h5 className="movie__year">{year}</h5>

            <img src={poster} alt={title} title={title}></img>

            <ul className="genres">{genres.map((genre, idx)=>
                <li key={idx} className="genres__genre">{genre}</li>
            )}</ul>

            <p className="movie__summary">{summary}</p>            
            <hr></hr>
        </div>
    )
}

Movie.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;