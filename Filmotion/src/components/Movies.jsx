import React, { useEffect, useState } from 'react';
import "../styles/movies.scss"; // Import your styles here
import Loader from './Loader'; // Import your Loader component if you have one

const Movies = () => {
  const [movies, setMovies] = useState({
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [loading, setLoading] = useState(true);
  
  const apiKey = '7cac2b65b885b67aae4c72b175f56620'; // Your API key

  useEffect(() => {
    const apiUrls = {
      popular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
      topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`,
      upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
    };

    const fetchMovies = async () => {
      try {
        const [popularResponse, topRatedResponse, upcomingResponse] = await Promise.all([
          fetch(apiUrls.popular),
          fetch(apiUrls.topRated),
          fetch(apiUrls.upcoming),
        ]);

        const popularData = await popularResponse.json();
        const topRatedData = await topRatedResponse.json();
        const upcomingData = await upcomingResponse.json();

        setMovies({
          popular: popularData.results,
          topRated: topRatedData.results,
          upcoming: upcomingData.results,
        });
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [apiKey]); // Now apiKey is the only dependency

  if (loading) return <Loader />; // Show loader while data is loading

  return (
    <div className="movies">
      <h2>Movies</h2>

      {/* Popular Movies */}
      <div className="movie-category">
        <h3>Popular Movies</h3>
        <div className="movie-list">
          {movies.popular.map((movie) => (
            <div key={movie.id} className="movie-item">
              <img 
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                alt={movie.title} 
                className="movie-image" 
              />
              <h4>{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Top Rated Movies */}
      <div className="movie-category">
        <h3>Top Rated Movies</h3>
        <div className="movie-list">
          {movies.topRated.map((movie) => (
            <div key={movie.id} className="movie-item">
              <img 
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                alt={movie.title} 
                className="movie-image" 
              />
              <h4>{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Movies */}
      <div className="movie-category">
        <h3>Upcoming Movies</h3>
        <div className="movie-list">
          {movies.upcoming.map((movie) => (
            <div key={movie.id} className="movie-item">
              <img 
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                alt={movie.title} 
                className="movie-image" 
              />
              <h4>{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
