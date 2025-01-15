import React from 'react';

const PlayDetails = ({ title, year, genre }) => {
  return (
    <div className="play-details">
      <h4>{title} ({year})</h4>
      <p>Жанр: {genre}</p>
    </div>
  );
};

export default PlayDetails;
