import React from 'react';

const Tracks = (tracks: any) => {
  let i = 0;
  let renderTracks = tracks ?
    tracks.tracks.map((item: any) => {
      i += 1;
      return(
        <div className="item">
          <p>{i}.-</p>
          <img alt={item.name} src={item.album.images[2].url} />
          <p>{item.name}</p>
        </div>
      );
    }) : <div></div>;
  return(
    <div className="card">
      <h3>Top 10 tracks</h3>
      {renderTracks}
    </div>
  );
}

export default Tracks;