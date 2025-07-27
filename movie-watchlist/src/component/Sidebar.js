import React from 'react';
import './Sidebar.css';

function Sidebar({ genres, selectedGenre, onSelectGenre }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Categories</h2>
      <ul className="sidebar-list">
        <li className={selectedGenre === null ? 'active' : ''} onClick={() => onSelectGenre(null)}>
          All
        </li>
        {genres.map((genre) => (
          <li
            key={genre}
            className={selectedGenre === genre ? 'active' : ''}
            onClick={() => onSelectGenre(genre)}
          >
            {genre}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
