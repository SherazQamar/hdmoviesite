import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieThumb.css";

const MovieThumb = ({ clickable, movieId, movieName, image }) => {
  return (
    <div className="rmdb-moviethumb">
      {clickable ? (
        <Link
          to={{
            pathname: `/${movieId}`,
            movieName: `${movieName}`,
          }}
        >
          <img src={image} alt="movethumb" />
        </Link>
      ) : (
        <img src={image} alt="movethumb" />
      )}
    </div>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieName: PropTypes.string,
};

export default MovieThumb;
