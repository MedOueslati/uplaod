import React from "react";
import Rating from 'react-rating-stars-component';

const MovieCard = ({ movie }) => {
  return (
    <div className="container-fluid">
      <div class="bx">
        <img src={movie.poster} alt="movie" />{" "}
        <div class="content">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <h6>
            <span>{movie.rate}</span> <i class="bi bi-star-fill"></i>
          </h6>
          <div className="col p-2">
          <Rating
		/>
      </div>
        </div>
      </div>


    </div>
  );
};

export default MovieCard;
