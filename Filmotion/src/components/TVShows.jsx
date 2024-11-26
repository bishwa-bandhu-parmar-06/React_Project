import React, { useState, useEffect } from 'react';
import "../styles/tvshows.scss";  // Use the same style file for consistency
import { Link } from 'react-router-dom';
import Loader from './Loader'; // Import your Loader component

const TVShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=7cac2b65b885b67aae4c72b175f56620`;
  const imgUrl = "https://image.tmdb.org/t/p/original";  // Base URL for images

  useEffect(() => {
    // Fetch TV Shows data
    const fetchTVShows = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setTvShows(data.results);
      } catch (error) {
        console.error('Error fetching TV Shows data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };

    fetchTVShows();
  }, [apiUrl]);

  return (
    <div className="tv-shows">
      <h3>Popular TV Shows</h3>
      {/* Show the loader while data is loading */}
      {loading ? (
        <Loader />  
      ) : (
        <div className="tv-show-list">
          {tvShows.map((show) => (
            <div key={show.id} className="tv-show-item">
              <Link to={`/playmovies/${show.id}`}>
                <img 
                  src={`${imgUrl}${show.poster_path}`} 
                  alt={`Poster of ${show.name}`} 
                  className="tv-show-image"
                />
              </Link>
              <h4>{show?.name || "Untitled"}</h4>
              {/* Uncomment the following line if you want to show the overview */}
              {/* <p>{show?.overview || "No description available."}</p> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TVShows;
