import React from 'react';

const Login = () => {
  return(
    <div className="loginPage">
      <h1>Sign in with Spotify</h1>
      <button className="loginButton" onClick={() => {
        window.location.href = window.location.href.includes('localhost') 
        ? 'http://localhost:8888/login' 
        : 'https://better-playlists-backend.herokuapp.com/login' }
      }><h3>Sign in</h3></button> 
    </div>
  );
}

export default Login;