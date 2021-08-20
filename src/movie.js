import React from 'react';
import PropTypes from 'prop-types';
import "./movie.css"

function Movie({year, title, summary, poster, genres}){
    return (
        <div class="movie">
            <h3 class="movie__title">{title}</h3>
            <h5 class="movie__year">{year}</h5>

            <img src={poster} alt={title} title={title}></img>

            <ul className="genres">{genres.map((genre, idx)=>
                <li key={idx} className="genres__genre">{genre}</li>
            )}</ul>

            <p class="movie__summary">{summary}</p>            
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