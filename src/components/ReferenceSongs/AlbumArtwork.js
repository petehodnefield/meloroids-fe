import React, { useRef } from "react";

const AlbumArtwork = ({ album, artist }) => {
  let albumNameConcat = album.split(" ").join("");
  return (
    <img
      className="ref__albumArt"
      src={require(`../../assets/aa/${artist}/${albumNameConcat}.png`)}
    ></img>
  );
};
export default AlbumArtwork;
