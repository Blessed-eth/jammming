import React from 'react';
import styles from './tracklist.module.css';
import TrackItem from './TrackItem';

const Tracklist = ({ tracks, onAddTrack, onRemoveTrack }) => {
  const handleAddTrack = (track) => {
    onAddTrack(track);
  };

  const handleRemoveTrack = (track) => {
    onRemoveTrack(track);
  };

  return (
    <div>
      <h2>Tracklist</h2>
      {tracks.map((track) => (
        <div key={track.id}>
          <p>{track.name}</p>
          <p>{track.artist}</p>
          <p>{track.album}</p>
          <button onClick={() => handleAddTrack(track)}>Add</button>
          <button onClick={() => handleRemoveTrack(track)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Tracklist;
