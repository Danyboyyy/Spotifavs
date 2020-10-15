import React, { useState, useEffect } from 'react';
import './App.css';
import { getAccessToken } from './requests/getAccessToken';

function App() {
  const [user, setUser] = useState('');
  const [userName, setUserName] = useState('');
  const [favArtist, setFavArtist] = useState('');
  const [favGenre, setFavGenre] = useState('');
 
  useEffect(() => {
    const accessToken = getAccessToken();
    setUser(accessToken);

    fetch('https://api.spotify.com/v1/me/following?type=artist', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    })
    .then((response) => response.json())
    .then(data => console.log(data.artists.items[0].name))
  });

  return (
    <div className="App">
      {user === '' ? 
      <button onClick={() => {
        window.location.href = window.location.href.includes('localhost') 
        ? 'http://localhost:8888/login' 
        : 'https://better-playlists-backend.herokuapp.com/login' }
      }>Sign in with Spotify</button> :
      <div>
        {userName}
      </div>
      }
    </div>
  );
}

export default App;
