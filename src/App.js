import React, { useState } from 'react';
import './App.css';
import Tracklist from './components/tracklist/tracklist';
import Playlist from './components/playlist/playlist';

const App = () => {
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const search = () => {
    // Code for searching and updating search results
  };

  const addTrackToPlaylist = (track) => {
    // Code for adding a track to the playlist
  };

  const removeTrackFromPlaylist = (track) => {
    // Code for removing a track from the playlist
  };

  const savePlaylist = () => {
    // Code for saving the playlist to the user's Spotify account
  };

  return (
    <div>
      <h1>My music App</h1>
      <Playlist playlistName={playlistName} setPlaylistName={setPlaylistName} />
      <Tracklist tracks={playlistTracks} onAddTrack={addTrackToPlaylist} onRemoveTrack={removeTrackFromPlaylist} />
      <button onClick={savePlaylist}>Save Playlist</button>
    </div>
  );
};

export default App;
