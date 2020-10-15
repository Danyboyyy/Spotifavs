import React, { useState, useEffect } from 'react';
import './App.css';
import { getAccessToken } from './requests/getAccessToken';
/*
let empty: {
  name: string,
  followers: number,
  image: string
}[];*/

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

  let renderArtists = userName && favArtists ?
    favArtists.map((item: any) => {
      return(
        <p>{item.name}</p>
      );
    }) : <div></div>;

    let renderTracks = userName && favTracks ?
    favTracks.map((item: any) => {
      return(
        <p>{item.name}</p>
      );
    }) : <div></div>;

  return (
    <div className="App">
      {!user ? 
        <button onClick={() => {
          window.location.href = window.location.href.includes('localhost') 
          ? 'http://localhost:8888/login' 
          : 'https://better-playlists-backend.herokuapp.com/login' }
        }>Sign in with Spotify</button> 
      :
        <>
          <div>{userName}</div>
          <div className="display">
            {favArtists ? <div className="card">{renderArtists}</div> : console.log('ps no')}
            {favTracks ? <div className="card">{renderTracks}</div> : console.log('ps no')}
          </div>
        </>
      }
    </div>
  );
}

export default App;
