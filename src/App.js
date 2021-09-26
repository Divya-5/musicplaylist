import React, { useState } from "react";
import "./styles.css";
const playlist = {
  HipHop: [
    {
      name: "Family Ties",
      link:
        "https://open.spotify.com/track/7Bpx2vsWfQFBACRz4h3IqH?si=8f89625a89be4d4d"
    },
    {
      name: "Lonely",
      link:
        "https://open.spotify.com/track/6pmNoWKk0r6zfIjWneJRxR?si=4efd3ea2c27746de"
    },
    {
      name: "Red Light",
      link:
        "https://open.spotify.com/track/1B6CUUecnY04JvciEjSVfh?si=797b230bb7cc4278"
    }
  ],

  Jazz: [
    {
      name: "Stormy Weather",
      link:
        "https://open.spotify.com/track/6ffJxrVKkPVW4hiRoiteB2?si=ed38b9c0240848f7"
    },
    {
      name: "Search For Peace",
      link:
        "https://open.spotify.com/track/4qRJ7ZJyfzchEd2fjle7Bz?si=41ed72f04e8c4d17"
    },
    {
      name: "Blue World",
      link:
        "https://open.spotify.com/track/5z8eOnPiOC22EYpniAX3Qg?si=e60536b1f75a4146"
    }
  ],
  Oldies: [
    {
      name: "Dance with Me",
      link:
        "https://open.spotify.com/track/2GORop0i2cyx8C0A3JzL44?si=7d019f704ebc46f8"
    },
    {
      name: "Still the one",
      link:
        "https://open.spotify.com/track/2dtK02TSAuTvVYU2wGAVG0?si=c0a19de7e5564c71"
    },
    {
      name: "You send me ",
      link:
        "https://open.spotify.com/track/0BFEyqJ9DJXS7gKg0Kj46R?si=0ed042ae711149fe"
    }
  ]
};
export default function App() {
  const [selectMusic, setMusic] = useState("HipHop");
  function playListHandler(category) {
    setMusic(category);
  }
  return (
    <div className="App">
      <h1>Music Playlist</h1>
      <div style={{ textAlign: "left" }}>
        <h3> Checkout my 2021 playlist of spotify 👇</h3>
        {Object.keys(playlist).map((category) => (
          <button onClick={() => playListHandler(category)}> {category}</button>
        ))}
      </div>
      <hr />
      <h2>Display List of songs:</h2>
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {playlist[selectMusic].map((song) => (
            <li key={song.name} style={{ textAlign: "center" }}>
              {" "}
              <div class="list-item">
                <h2>{song.name}</h2>
                <a href={song.link} target="_blank" rel="noreferrer">
                  Listen Song
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
