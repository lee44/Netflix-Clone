import React from "react";
import YouTube from "react-youtube";

function Trailer({ trailerUrl, setTrailerUrl }) {
  const youtubeOpts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
      {trailerUrl && (
        <div>
          <button onClick={() => setTrailerUrl("")}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Trailer;
