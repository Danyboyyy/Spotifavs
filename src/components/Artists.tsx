import React from 'react';

const Artists = (artists: any) => {
  let i = 0;
  let renderArtists = artists ?
    artists.artists.map((item: any) => {
      i += 1;
      return(
        <div className="item">
          <p>{i}.-</p>
          <img alt={item.name} src={item.images[2].url} height={64} width={64} />
          <p>{item.name}</p>
        </div>
      );
    }) : <div></div>;

  return(
    <div className="card">
      <h3>Top 10 artists</h3>
      {renderArtists}
    </div>
  );
}

export default Artists;