import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// export const server = `https://api.themoviedb.org/3/movie/550?api_key=7cac2b65b885b67aae4c72b175f56620`;