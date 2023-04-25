/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.css";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(fetchURL);
      console.log("data", request);
      setMovies(request.data.results);
      return request;
    };
    fetchMovies();
  }, []);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.name}
                className={`row__poster ${isLargeRow && "row_posterLarge"}`}
                src={`${baseURL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
