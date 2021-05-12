import React from "react";
import { useSelector } from "react-redux";
import "./movieComponent.css";

const urlComponent = "https://image.tmdb.org/t/p/w342";

const MovieComponent = () => {
  const movies = useSelector((state) => state.allMovies.movies);

  const renderList = movies.map((movie) => {
    const { id, title, poster_path, release_date } = movie;
    return (
      <div key={id}>
        <div className="card mb-3">
          <img
            src={urlComponent + poster_path}
            style={{ width: "185px" }}
            alt=""
          />
        </div>

        <p className="para">
          <strong>{title}</strong> ({release_date.slice(0, 4)})
        </p>
      </div>
    );
  });

  return (
    <>
      <h1 className="recom">Recommended For You:</h1>
      <div className="renderlist">{renderList}</div>
    </>
  );
};

export default MovieComponent;
