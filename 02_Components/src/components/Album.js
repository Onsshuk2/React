import React from 'react';
import '../styles/App.css';

const Album = ({ title, cover }) => {
  return (
    <div className="album">
      <h3>{title}</h3>
      <img
        src={cover}
        alt={`Обкладинка альбому ${title}`}
        className="album-cover"
      />
    </div>
  );
};

export default Album;
