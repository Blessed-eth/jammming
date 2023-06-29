import React from 'react';

const TrackItem = ({ track }) => {
    return (
        <li>
            <h3>(track.name)</h3>
            <p>Artist: {track.artist}</p>
            <p>Album: {track.album}</p>
        </li>
    );
};

export default TrackItem