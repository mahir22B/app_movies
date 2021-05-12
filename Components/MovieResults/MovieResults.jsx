import React, { useEffect } from "react";
import MovieComponent from "../MovieComponent/MovieComponent";
import { useDispatch } from "react-redux";
import { setMovies } from "../../Redux/Action/movieAction";
import axios from "axios";
import "./movieresults.css";
import Search from "../Search/Search";

const MovieResults = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const response = await axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=5bbee0b959d532da862ba146e0d6eff9&language=en-US&page=1"
      )
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setMovies(response.data.results));
  };

  useEffect(() => {
    fetchMovies();
  });

  return (
    <>
      <div className="movieResults">
        <Search />
        <div className="pic">
          <img
            src="https://www.coffeeandcigarettes.co.uk/wp-content/uploads/2017/08/LandOfMine_CCWebsite_1600x900-1.jpg"
            alt=""
          />
          <img
            alt=""
            src="https://i.pinimg.com/originals/6a/3d/6e/6a3d6ec1e3fc56ab3aabd2555bc4779e.jpg"
          />
          <img alt="" src="https://wallpaperaccess.com/full/3440775.jpg" />
        </div>
        <MovieComponent />
      </div>
    </>
  );
};

export default MovieResults;
