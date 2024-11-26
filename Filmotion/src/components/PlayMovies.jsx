// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const PlayMovies = () => {
//   const { movieId } = useParams(); // Get the movie ID from the URL
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=7cac2b65b885b67aae4c72b175f56620`; // Fetch the movie details
//   const trailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=7cac2b65b885b67aae4c72b175f56620`; // Fetch trailer video
  
//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         console.log(data);
//         setMovieDetails(data);

//         // Fetch the trailer info
//         const trailerResponse = await fetch(trailerUrl);
//         const trailerData = await trailerResponse.json();
//         const trailer = trailerData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
//         if (trailer) {
//           setTrailerKey(trailer.key); // Save the trailer key if available
//         }
//       } catch (error) {
//         console.error('Error fetching movie details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovieDetails();
//   }, [apiUrl, trailerUrl]);

//   const [trailerKey, setTrailerKey] = useState(""); // State to store the trailer key

//   if (loading) return <div>Loading...</div>; // Loading state

//   if (!movieDetails) return <div>No details available.</div>; // Error state if no details

//   return (
//     <div className="play-movies">
//       <h1>{movieDetails.original_title || movieDetails.name}</h1>
//       {/* Check if trailerKey exists, if so, render YouTube embed */}
//       {trailerKey ? (
//         <iframe
//           width="100%"
//           height="500"
//           src={`https://www.youtube.com/embed/${trailerKey}`}
//           title="Movie Trailer"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       ) : (
//         <p>No trailer available</p>
//       )}
//       <p>{movieDetails.overview || "No description available."}</p>
//     </div>
//   );
// };

// export default PlayMovies;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlayMovies = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=7cac2b65b885b67aae4c72b175f56620`; // Replace with your actual API key
  
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [apiUrl]);

  if (loading) return <div>Loading...</div>;
  if (!movieDetails) return <div>No details available.</div>;

  return (
    <div className="play-movies">
      <h1>{movieDetails.original_title}</h1>
      {/* Here you could add a video player or trailer display */}
      <p>{movieDetails.overview || "No description available."}</p>
      {/* Add your video player component here */}
    </div>
  );
};

export default PlayMovies;
