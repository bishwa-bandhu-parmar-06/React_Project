import React, { useState, useEffect } from 'react';
import "../styles/home.scss";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loader from "./Loader"; // Import your Loader component
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=7cac2b65b885b67aae4c72b175f56620`;
  const imgUrl = "https://image.tmdb.org/t/p/original"; // Base URL for images
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        fetchTrailers(data.results);
        setMovies(data.results); // Store the array of movies in state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };
    fetchData();
  }, [apiUrl]);

  // Fetch trailers for each movie
  const fetchTrailers = async (movies) => {
    const trailerData = await Promise.all(
      movies.map(async (movie) => {
        const trailerUrl = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=7cac2b65b885b67aae4c72b175f56620`;
        const response = await fetch(trailerUrl);
        const data = await response.json();
        const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        return trailer ? { id: movie.id, title: movie.original_title, trailerKey: trailer.key } : null;
      })
    );
    setTrailers(trailerData.filter(Boolean));
  };

  return (
    <div className="section">
      {loading ? <Loader /> : (
        <>
          <div className="banner">
            <Carousel
              infiniteLoop
              autoPlay
              showStatus={false}
              showArrows={true}
              showThumbs={true}
              interval={1000}
              selectedItem={0}
            >
              {movies.map((movie) => (
                <div key={movie.id}>
                  <img 
                    src={`${imgUrl}${movie.backdrop_path}`} 
                    alt={`Backdrop of ${movie.original_title}`} 
                    style={{ width: "100%", height: "100vh", objectFit: "cover", objectPosition: "center" }} 
                  />
                  <div className="carousel-slide-content">
                    <h1 className="movietitle">{movie?.original_title || "Untitled"}</h1>
                    <h3 className="moviedecription">{movie?.overview || "No description available."}</h3>
                    <button className="playbutton" onClick={() => navigate('/playmovies')}>Play</button>
                    <button className="mylistbutton" onClick={() => navigate('/mylist')}>My List</button>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          {/* Trailer Section */}
          <div className="trailer">
            <h3 style={{color: "#d62828"}}>Latest Trailers:</h3>
            <div className="trailer-list">
              {trailers.map((trailer) => (
                <div key={trailer.id} className="trailer-item">
                  <h4>{trailer.title}</h4>
                  <iframe 
                    width="100%" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${trailer.trailerKey}`} 
                    title={trailer.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>

          {/* Free To Watch Section */}
          <div className="watchnow">
            <h3 style={{color: "#d62828"}}>Free To Watch:</h3>
            <div className="free-movie-grid">
              {movies.slice(0, 5).map((movie) => ( // Display a subset as free-to-watch
                <div 
                  key={movie.id} 
                  className="free-movie-item" 
                  onClick={() => navigate('/playmovies')}
                >
                  <img 
                    src={`${imgUrl}${movie.poster_path}`} 
                    alt={`Poster of ${movie.original_title}`} 
                    className="free-movie-image" 
                  />
                  <h4 className="free-movie-title">{movie.original_title}</h4>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
