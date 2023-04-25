import { useEffect, useState } from 'react';
import './Banner.css'
import axios from "../../axios";
import requests from '../../api/Request';
function Banner() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      console.log(request)
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return requests;
    }
    fetchMovies();
  }, [])
  console.log(movies)
  function truncate (string,n) {
    return string?.length > n ? string.substring(0, n-1) + '...' : string;
  }
  return (
        <>
        <div className='banner'
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition: 'center center'
          }}
        >
            <div className='banner__content'>
              <h1 className='banner__title'>{movies?.name || movies?.title || movies?.original_name}</h1>
              <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
              </div>
              <h1 className='banner__description'>
                {truncate(movies?.overview, 150)}
              </h1>
            </div>

            <div className='banner__fadeBottom' />
        </div>
        </>
  )
}

export default Banner