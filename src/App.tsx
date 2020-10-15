import React, { useState, useEffect } from 'react';
import './App.css';
import { getAccessToken } from './requests/getAccessToken';

function App() {
  const [user, setUser] = useState('');
  const [userName, setUserName] = useState('');
  const [favArtists, setFavArtists] = useState([]);
  const [favTracks, setFavTracks] = useState([]);
 
  useEffect(() => {
    const accessToken = getAccessToken();
    setUser(accessToken);

    fetch('https://api.spotify.com/v1/me/top/artists', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    })
    .then((response) => response.json())
    .then(data => console.log(data.items))
    .catch(() => console.log('aaa'))

    fetch('https://api.spotify.com/v1/me/top/tracks', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    })
    .then((response) => response.json())
    .then(data => console.log(data.items))
    .catch(() => console.log('aaa'))
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
        
      </div>
      }
    </div>
  );
}

export default App;
