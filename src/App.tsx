import React, { useState, useEffect } from 'react';
import './App.css';
import { getAccessToken } from './requests/getAccessToken';
import Login from './components/Login';
import Tracks from './components/Tracks';
import Artists from './components/Artists';

function App() {
  const [user, setUser] = useState('');
  const [userName, setUserName] = useState('');
  const [favArtists, setFavArtists] = useState([]);
  const [favTracks, setFavTracks] = useState([]);
 
  useEffect(() => {
    const accessToken = getAccessToken();
    setUser(accessToken);

    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    })
    .then((response) => response.json())
    .then(data => setUserName(data.display_name))

    fetch('https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    })
    .then((response) => response.json())
    .then(data => setFavArtists(data.items))

    fetch('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    })
    .then((response) => response.json())
    .then(data => setFavTracks(data.items))
  }, []);

  return (
    <div className="App">
      {!user ? 
        <Login /> 
      :
        <div>
          <h1>{userName}´s Favorites</h1>
          <div className="display">
            {favArtists ? <Tracks tracks={favTracks} /> : console.log('ps no')}
            {favTracks ? <Artists artists={favArtists} /> : console.log('ps no')}
          </div>
        </div>
      }
    </div>
  );
}

export default App;
