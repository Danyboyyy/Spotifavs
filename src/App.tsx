import React, { useState, useEffect } from 'react';
import './App.css';
import { getAccessToken } from './requests/GetHashParams';

function App() {
  const [user, setUser] = useState('');
 
  useEffect(() => {
    const accessToken = getAccessToken();
    setUser(accessToken);
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
        AAAA
      </div>
      }
    </div>
  );
}

export default App;
