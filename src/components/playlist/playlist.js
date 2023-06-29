import React from 'react';
import styles from './playlist.module.css';

const Playlist = ({ playlistName, setPlaylistName }) => {
  const handleNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  return (
    <div>
      <h2>
        <input
          type="text"
          value={playlistName}
          onChange={handleNameChange}
          className={styles.playlistTitle}
        />
        <input
  type="text"
  placeholder="Enter a song, album, or artist"
  value={searchQuery}
  onChange={(event) => setSearchQuery(event.target.value)}
/>
<button onClick={search}>Search</button>

      </h2>
    </div>
  );
};

export default Playlist;
