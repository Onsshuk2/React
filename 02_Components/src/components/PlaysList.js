import React from 'react';
import PlayDetails from './PlayDetails';

const plays = [
  { title: 'Гамлет', year: 1600, genre: 'Трагедія' },
  { title: 'Ромео і Джульєтта', year: 1597, genre: 'Трагедія' },
  { title: 'Сон в літню ніч', year: 1595, genre: 'Комедія' },
  { title: 'Макбет', year: 1606, genre: 'Трагедія' },
  { title: 'Отелло', year: 1603, genre: 'Трагедія' },
];

const PlaysList = () => {
  return (
    <div className="plays-list">
      <h3>Твори Шекспіра:</h3>
      <ul>
        {plays.map((play, index) => (
          <li key={index}>
            <PlayDetails title={play.title} year={play.year} genre={play.genre} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaysList;
