import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

const Movie = props => {
  return (
    <div className="movie_card">
      <img src={props.poster} alt={props.title} />
      <ul className="movie_data">
        <li className="movie_title">{props.title}</li>
        <li className="movie_year">{props.year}</li>
        <li className="movie_summary">{props.summary}</li>
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
