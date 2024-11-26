import React from 'react';
import "../styles/loader.scss"; // Import your CSS file for styling

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <h2 className="loader-text">Loading FilMotion.</h2>
    </div>
  );
};

export default Loader;
